// @ts-nocheck
var TravelAgentEvaluateRequest = Class.create();
TravelAgentEvaluateRequest.prototype = {
    initialize: function() {},

    evaluateRequest: function(requestNumber) {
        try {
            if (!requestNumber) {
                return JSON.stringify({ success: false, error: 'request_number is required' });
            }

            // Look up the travel request
            var reqGr = new GlideRecord('x_snc_travel_a7t2p_travel_request');
            reqGr.addQuery('request_number', requestNumber);
            reqGr.query();

            if (!reqGr.next()) {
                return JSON.stringify({ success: false, error: 'Travel request ' + requestNumber + ' not found in table x_snc_travel_a7t2p_travel_request' });
            }

            var sysId = reqGr.getUniqueValue();
            var baseUrl = gs.getProperty('glide.servlet.uri') || '';
            var recordLink = baseUrl + 'x_snc_travel_a7t2p_travel_request.do?sys_id=' + sysId;

            // Collect request data for the response
            var requestData = {
                request_number: requestNumber,
                requester: (reqGr.getValue('requester_name') || '') + ' (' + (reqGr.getValue('requester_email') || '') + ')',
                travel_type: reqGr.getValue('travel_type') || '',
                destination: reqGr.getValue('destination') || '',
                dates: (reqGr.getValue('departure_date') || '') + ' to ' + (reqGr.getValue('return_date') || ''),
                flight_class: reqGr.getValue('flight_class_requested') || '',
                flight_hours: reqGr.getValue('estimated_flight_hours') || '',
                accommodation_per_night: reqGr.getValue('estimated_accommodation_per_night') || '',
                total_cost: reqGr.getValue('total_estimated_cost') || ''
            };

            // Query all approval rules
            var ruleGr = new GlideRecord('x_snc_travel_a7t2p_travel_approval_rule');
            ruleGr.query();

            var flags = [];
            var approvalRequirements = [];
            var withinPolicy = [];
            var highestLevel = 'none'; // none < manager < vp

            while (ruleGr.next()) {
                var ruleId = ruleGr.getValue('rule_id') || '';
                var condField = ruleGr.getValue('condition_field') || '';
                var condOperator = ruleGr.getValue('condition_operator') || '';
                var condValue = ruleGr.getValue('condition_value') || '';
                var ruleAction = ruleGr.getValue('action') || '';
                var ruleLevel = ruleGr.getValue('approval_level') || 'none';
                var ruleMessage = ruleGr.getValue('message') || '';
                var ruleName = ruleGr.getValue('rule_name') || '';
                var policyRef = ruleGr.getValue('policy_reference') || '';

                var requestValue = reqGr.getValue(condField) || '';
                var matched = false;

                // Evaluate condition
                if (condOperator === 'equals') {
                    matched = (requestValue === condValue);
                } else if (condOperator === 'greater_than') {
                    matched = (parseFloat(requestValue) > parseFloat(condValue));
                } else if (condOperator === 'less_than') {
                    if (condField === 'departure_date') {
                        var today = new GlideDateTime();
                        var departure = new GlideDateTime(requestValue + ' 00:00:00');
                        var duration = GlideDateTime.subtract(today, departure);
                        var daysUntil = Math.floor(duration.getNumericValue() / 86400000);
                        matched = (daysUntil < parseInt(condValue, 10));
                    } else {
                        matched = (parseFloat(requestValue) < parseFloat(condValue));
                    }
                } else if (condOperator === 'contains') {
                    matched = (requestValue.indexOf(condValue) !== -1);
                }

                if (matched) {
                    // Only apply accommodation rules to matching travel type
                    var travelType = reqGr.getValue('travel_type') || '';
                    if (ruleId === 'RULE_ACCOM_DOM' && travelType !== 'domestic') {
                        continue;
                    }
                    if (ruleId === 'RULE_ACCOM_INTL' && travelType !== 'international') {
                        continue;
                    }

                    var finding = {
                        rule_id: ruleId,
                        rule_name: ruleName,
                        action: ruleAction,
                        approval_level: ruleLevel,
                        message: ruleMessage,
                        policy_section: policyRef,
                        field_checked: condField,
                        field_value: requestValue,
                        threshold: condOperator + ' ' + condValue
                    };

                    if (ruleAction === 'flag') {
                        flags.push(finding);
                    } else if (ruleAction === 'auto_approve') {
                        withinPolicy.push(finding);
                    }

                    if (ruleAction === 'require_approval' || ruleAction === 'flag') {
                        approvalRequirements.push(finding);
                    }

                    // Determine highest approval level
                    if (ruleLevel === 'vp') {
                        highestLevel = 'vp';
                    } else if (ruleLevel === 'manager' && highestLevel !== 'vp') {
                        highestLevel = 'manager';
                    }
                }
            }

            // Build structured policy assessment
            var assessmentParts = [];
            for (var i = 0; i < approvalRequirements.length; i++) {
                var req = approvalRequirements[i];
                var prefix = req.action === 'flag' ? 'FLAG' : 'REQUIRED';
                assessmentParts.push('[' + prefix + '] ' + req.message + ' (Rule: ' + req.rule_id + ', Level: ' + req.approval_level + ')');
            }
            for (var j = 0; j < withinPolicy.length; j++) {
                assessmentParts.push('[OK] ' + withinPolicy[j].message + ' (Rule: ' + withinPolicy[j].rule_id + ')');
            }

            var policyAssessment = assessmentParts.length > 0
                ? assessmentParts.join(' | ')
                : 'All items within policy guidelines. No flags or exceptions required.';

            // Determine approval status
            var approvalStatus = 'pending_review';
            if (highestLevel === 'vp') {
                approvalStatus = 'pending_vp';
            } else if (highestLevel === 'manager') {
                approvalStatus = 'pending_manager';
            }

            // Update the request record
            reqGr.setValue('policy_assessment', policyAssessment);
            reqGr.setValue('approval_routing', highestLevel);
            reqGr.setValue('approval_status', approvalStatus);
            reqGr.update();

            // Build next steps
            var nextSteps = [];
            if (highestLevel === 'vp') {
                nextSteps.push('VP approval is required. Forward this request and the policy assessment to the appropriate VP.');
            } else if (highestLevel === 'manager') {
                nextSteps.push('Manager approval is required. Forward this request to the direct manager.');
            } else {
                nextSteps.push('No additional approval flags. Standard manager routing applies.');
            }
            if (flags.length > 0) {
                nextSteps.push(flags.length + ' item(s) flagged for review. The approver should review these flags before approving.');
            }

            return JSON.stringify({
                success: true,
                request_number: requestNumber,
                record_link: recordLink,
                request_summary: requestData,
                evaluation_result: {
                    approval_status: approvalStatus,
                    approval_routing: highestLevel,
                    total_rules_triggered: approvalRequirements.length + withinPolicy.length,
                    flags_count: flags.length,
                    approval_requirements_count: approvalRequirements.length,
                    within_policy_count: withinPolicy.length
                },
                policy_assessment: policyAssessment,
                detailed_findings: {
                    flagged_items: flags,
                    approval_required: approvalRequirements,
                    within_policy: withinPolicy
                },
                record_updated: {
                    fields_modified: ['policy_assessment', 'approval_routing', 'approval_status'],
                    new_approval_status: approvalStatus,
                    new_approval_routing: highestLevel
                },
                next_steps: nextSteps
            });

        } catch (e) {
            gs.error('[TravelAgent] EvaluateRequest error: ' + e.message);
            return JSON.stringify({
                success: false,
                error: 'Failed to evaluate travel request: ' + e.message,
                request_number: requestNumber || '(none)',
                debug: 'Check syslog_app_scope for [TravelAgent] prefix entries'
            });
        }
    },

    type: 'TravelAgentEvaluateRequest'
};
