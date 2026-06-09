import { gs, GlideRecord, GlideDateTime } from '@servicenow/glide'

export function publicAgendaScript(request, response) {
    response.setContentType('text/html');
    response.setStatus(200);
    
    // Get optional date range parameters from query string
    var startDate = request.queryParams.start_date;
    var endDate = request.queryParams.end_date;
    
    // Calculate current week as default if no dates provided
    var defaultStartDate, defaultEndDate;
    if (!startDate || !endDate) {
        var now = new GlideDateTime();
        var currentDay = now.getDayOfWeekUTC(); // 1=Sunday, 2=Monday, etc.
        
        // Calculate start of week (Sunday) - just use date portion
        var weekStart = new GlideDateTime();
        weekStart.addDaysUTC(-(currentDay - 1));
        defaultStartDate = weekStart.getDate().getValue(); // Get just the date part
        
        // Calculate end of week (Saturday) - just use date portion
        var weekEnd = new GlideDateTime();
        weekEnd.addDaysUTC(7 - currentDay);
        defaultEndDate = weekEnd.getDate().getValue(); // Get just the date part
    }
    
    // Query real sessions data from the table with optional date filtering
    var sessions = [];
    var gr = new GlideRecord('x_snc_ai_learnin_4_ai_sessions');
    
    // Apply date range filter if provided, otherwise use current week
    var filterStartDate = startDate || defaultStartDate;
    var filterEndDate = endDate || defaultEndDate;
    
    if (filterStartDate && filterEndDate) {
        // Convert dates to proper GlideDateTime format for querying
        var queryStartDate, queryEndDate;
        
        if (startDate) {
            // User provided date - convert YYYY-MM-DD to beginning of day
            var startGDT = new GlideDateTime();
            startGDT.setDisplayValue(startDate + ' 00:00:00');
            queryStartDate = startGDT.getValue();
        } else {
            queryStartDate = defaultStartDate;
        }
        
        if (endDate) {
            // User provided date - convert YYYY-MM-DD to end of day
            var endGDT = new GlideDateTime();
            endGDT.setDisplayValue(endDate + ' 23:59:59');
            queryEndDate = endGDT.getValue();
        } else {
            queryEndDate = defaultEndDate;
        }
        
        // Filter sessions that START within the date range
        gr.addQuery('start_time', '>=', queryStartDate);
        gr.addQuery('start_time', '<=', queryEndDate);
    }
    
    gr.orderBy('start_time');
    gr.query();
    
    while (gr.next()) {
        sessions.push({
            title: gr.getValue('title') || 'Untitled Session',
            presenter: gr.getValue('presenter') || 'TBD',
            start_time: gr.getDisplayValue('start_time') || 'TBD',
            end_time: gr.getDisplayValue('end_time') || 'TBD',
            type: gr.getValue('session_type') || 'general',
            description: gr.getValue('description') || 'No description available',
            target_roles: gr.getDisplayValue('target_roles') || 'Others',
            geo_area: gr.getDisplayValue('geo_major_area') || 'APAC All',
            timezone: gr.getDisplayValue('timezone') || 'UTC',
            status: gr.getDisplayValue('status') || 'Planning',
            location: gr.getValue('location') || '',
            virtual_link: gr.getValue('virtual_link') || '',
            max_attendees: gr.getValue('max_attendees') || '',
            prerequisites: gr.getValue('prerequisites') || '',
            tags: gr.getValue('tags') || ''
        });
    }
    
    // Get dynamic role choices from role_choices table
    var roleChoices = [];
    var roleGr = new GlideRecord('x_snc_ai_learnin_4_role_choices');
    roleGr.query();
    while (roleGr.next()) {
        roleChoices.push({
            value: roleGr.getValue('name'),
            label: roleGr.getValue('label')
        });
    }
    
    // Get dynamic geo choices from sys_choice table
    var geoChoices = [];
    var choiceGr = new GlideRecord('sys_choice');
    choiceGr.addQuery('name', 'x_snc_ai_learnin_4_ai_sessions');
    choiceGr.addQuery('element', 'geo_major_area');
    choiceGr.orderBy('sequence');
    choiceGr.query();
    while (choiceGr.next()) {
        geoChoices.push({
            value: choiceGr.getValue('value'),
            label: choiceGr.getValue('label')
        });
    }
    
    // Get dynamic session type choices from sys_choice table  
    var typeChoices = [];
    var typeGr = new GlideRecord('sys_choice');
    typeGr.addQuery('name', 'x_snc_ai_learnin_4_ai_sessions');
    typeGr.addQuery('element', 'session_type');
    typeGr.orderBy('sequence');
    typeGr.query();
    while (typeGr.next()) {
        typeChoices.push({
            value: typeGr.getValue('value'),
            label: typeGr.getValue('label')
        });
    }
    
    var sessionsJson = JSON.stringify(sessions);
    var roleChoicesJson = JSON.stringify(roleChoices);
    var geoChoicesJson = JSON.stringify(geoChoices);
    var typeChoicesJson = JSON.stringify(typeChoices);
    
    // Convert filter dates to display format for the UI
    var displayStartDate = '';
    var displayEndDate = '';
    if (startDate) {
        displayStartDate = startDate;
    } else if (defaultStartDate) {
        var startGDT = new GlideDateTime();
        startGDT.setValue(defaultStartDate);
        displayStartDate = startGDT.getDisplayValue().split(' ')[0];
    }
    
    if (endDate) {
        displayEndDate = endDate;
    } else if (defaultEndDate) {
        var endGDT = new GlideDateTime();
        endGDT.setValue(defaultEndDate);
        displayEndDate = endGDT.getDisplayValue().split(' ')[0];
    }
    
    var css = `
        * { box-sizing: border-box; }
        body, html { 
            margin: 0; padding: 0; font-family: system-ui, sans-serif; 
            background: #f8f9fa; color: #1f2937; line-height: 1.5; 
        }
        .app { min-height: 100vh; padding: 1rem; }
        .app__header { 
            margin-bottom: 1.5rem; text-align: center; 
            padding-bottom: 1rem; border-bottom: 2px solid #e5e7eb; 
        }
        .app__title { 
            margin: 0 0 0.5rem 0; font-size: 2rem; 
            font-weight: 600; color: #1f2937; 
        }
        .app__subtitle { 
            margin: 0; font-size: 1.125rem; 
            color: #6b7280; font-weight: 400; 
        }
        .app__content { 
            display: grid; grid-template-columns: 300px 1fr; 
            gap: 1.5rem; align-items: start; 
        }
        .filter-panel { 
            background: #fff; border: 1px solid #d1d5db; 
            border-radius: 8px; padding: 1rem; height: fit-content; 
        }
        .filter-panel__header { 
            display: flex; justify-content: space-between; 
            align-items: center; margin-bottom: 1rem; 
            padding-bottom: 0.75rem; border-bottom: 1px solid #d1d5db; 
        }
        .filter-panel__title { 
            margin: 0; font-size: 1.25rem; 
            font-weight: 600; color: #1f2937; 
        }
        .btn { 
            display: inline-flex; align-items: center; 
            padding: 0.375rem 0.75rem; border: 1px solid #d1d5db; 
            border-radius: 6px; font-size: 0.875rem; cursor: pointer; 
            background: transparent; color: #1f2937; 
            transition: background-color 100ms; 
        }
        .btn:hover { background: #f3f4f6; }
        .btn--small { padding: 0.25rem 0.5rem; font-size: 0.75rem; }
        .filter-panel__content { 
            display: flex; flex-direction: column; gap: 1rem; 
        }
        .filter-group { 
            display: flex; flex-direction: column; gap: 0.5rem; 
        }
        .filter-label { 
            font-weight: 600; color: #1f2937; 
            font-size: 0.875rem; margin: 0; 
        }
        .filter-select, .filter-input { 
            height: 2.5rem; padding: 0 0.75rem; background: #fff; 
            border: 1px solid #d1d5db; border-radius: 6px; 
            color: #1f2937; font-size: 1rem; font-family: system-ui, sans-serif; 
        }
        .filter-select { 
            cursor: pointer; appearance: none; 
        }
        .filter-select:focus, .filter-input:focus { 
            outline: none; border-color: #0ea5e9; 
            box-shadow: 0 0 0 1px #0ea5e9; 
        }
        input[type="date"] { font-family: system-ui, sans-serif; font-size: 1rem; }
        .date-range-group { display: grid; grid-template-columns: 1fr; gap: 0.5rem; }
        .checkbox-group { 
            display: flex; flex-direction: column; gap: 0.5rem; 
            max-height: 150px; overflow-y: auto; 
        }
        .checkbox-item { display: flex; align-items: center; gap: 0.5rem; }
        .checkbox-item input[type="checkbox"] { margin: 0; }
        .checkbox-item label { margin: 0; cursor: pointer; font-size: 0.875rem; }
        .session-list { 
            background: #fff; border: 1px solid #d1d5db; 
            border-radius: 8px; padding: 1rem; 
            max-height: calc(100vh - 200px); overflow-y: auto; 
        }
        .session-list__header { 
            display: flex; justify-content: space-between; 
            align-items: center; margin-bottom: 1rem; 
            padding-bottom: 0.75rem; border-bottom: 1px solid #d1d5db; 
        }
        .session-list__title { 
            margin: 0; font-size: 1.25rem; 
            font-weight: 600; color: #1f2937; 
        }
        .session-list__count { color: #6b7280; font-size: 0.875rem; }
        .session-list__legend { 
            margin-bottom: 1rem; padding: 0.75rem; 
            background: #f8f9fa; border: 1px solid #e5e7eb; border-radius: 6px; 
        }
        .session-list__legend-title { 
            font-weight: 600; color: #1f2937; 
            font-size: 0.875rem; margin-right: 1rem; 
        }
        .session-list__legend-items { 
            display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 0.5rem; 
        }
        .session-list__legend-item { 
            display: flex; align-items: center; gap: 0.25rem; 
            font-size: 0.75rem; color: #6b7280; 
        }
        .session-list__legend-dot { 
            width: 0.75rem; height: 0.75rem; 
            border-radius: 50%; flex-shrink: 0; 
        }
        .session-card { 
            border: 1px solid #e5e7eb; border-radius: 6px; 
            padding: 1rem; margin-bottom: 0.75rem; cursor: pointer; 
            transition: all 150ms; background: #fff; 
        }
        .session-card:hover { 
            border-color: #0ea5e9; box-shadow: 0 1px 3px rgba(0,0,0,0.1); 
        }
        .session-card__header { 
            display: flex; justify-content: space-between; 
            align-items: flex-start; margin-bottom: 0.75rem; 
        }
        .session-card__title-row { 
            display: flex; align-items: center; gap: 0.5rem; flex: 1; 
        }
        .session-card__geo-indicator { 
            width: 0.75rem; height: 0.75rem; 
            border-radius: 50%; flex-shrink: 0; 
        }
        .session-card__title { 
            margin: 0; font-size: 1.125rem; 
            font-weight: 600; color: #1f2937; 
        }
        .session-card__calendar-button { flex-shrink: 0; }
        .session-card__description { 
            margin-bottom: 0.75rem; color: #4b5563; line-height: 1.4; 
            display: -webkit-box; -webkit-line-clamp: 3; 
            -webkit-box-orient: vertical; overflow: hidden; 
            text-overflow: ellipsis; 
        }
        .session-card__meta-grid { 
            display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; 
            gap: 0.75rem; margin-bottom: 0.75rem; font-size: 0.875rem; 
        }
        .session-card__meta-item { 
            display: flex; flex-direction: column; gap: 0.25rem; 
        }
        .session-card__label { 
            font-weight: 600; color: #6b7280; font-size: 0.75rem; 
            text-transform: uppercase; letter-spacing: 0.05em; 
        }
        .session-card__value { color: #1f2937; font-weight: 500; }
        .session-card__details { font-size: 0.875rem; color: #4b5563; }
        .session-card__details > div { margin-bottom: 0.5rem; }
        .session-card__details > div:last-child { margin-bottom: 0; }
        .session-card__link { color: #0ea5e9; text-decoration: none; }
        .session-card__link:hover { text-decoration: underline; }
        .session-card__tag-list { 
            display: flex; flex-wrap: wrap; gap: 0.25rem; margin-top: 0.25rem; 
        }
        .session-card__tag { 
            padding: 0.125rem 0.375rem; background: #e5e7eb; 
            color: #4b5563; border-radius: 4px; font-size: 0.75rem; 
        }
        .session-list__empty { text-align: center; padding: 2rem; color: #6b7280; }
        
        @media(max-width: 1024px) {
            .app__content { grid-template-columns: 1fr; gap: 1rem; }
            .session-list { max-height: 60vh; }
            .session-card__meta-grid { grid-template-columns: 1fr 1fr; gap: 0.5rem; }
        }
        
        @media(max-width: 768px) {
            .session-card__meta-grid { grid-template-columns: 1fr 1fr; gap: 0.5rem; }
            .session-card__header { 
                flex-direction: column; align-items: flex-start; gap: 0.5rem; 
            }
            .session-card__calendar-button { align-self: flex-end; }
        }
        
        @media(max-width: 640px) {
            .session-card__meta-grid { grid-template-columns: 1fr; gap: 0.5rem; }
        }
    `;
    
    var html = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>APAC+J Quarterly Enablement Plan</title>
            <style>${css}</style>
        </head>
        <body>
            <div class="app">
                <div class="app__header">
                    <h1 class="app__title">APAC+J Quarterly Enablement Plan</h1>
                    <p class="app__subtitle">Explore sessions tailored to your role, region, and interests</p>
                </div>
                <div class="app__content">
                    <div class="filter-panel">
                        <div class="filter-panel__header">
                            <h2 class="filter-panel__title">Filter Sessions</h2>
                            <button class="btn" onclick="clearFilters()">Clear Date Range</button>
                        </div>
                        <div class="filter-panel__content">
                            <div class="filter-group">
                                <label class="filter-label">Date Range</label>
                                <div class="date-range-group">
                                    <input type="date" class="filter-input" id="startDateFilter" placeholder="Start Date" />
                                    <input type="date" class="filter-input" id="endDateFilter" placeholder="End Date" />
                                </div>
                                <button class="btn" onclick="applyDateFilter()" style="margin-top:0.5rem;width:100%;justify-content:center;">Apply Date Filter</button>
                            </div>
                            <div class="filter-group">
                                <label class="filter-label">By Role</label>
                                <select class="filter-select" id="roleFilter" onchange="filterSessions()">
                                    <option value="">All Roles</option>
                                </select>
                            </div>
                            <div class="filter-group">
                                <label class="filter-label">Geo / Major Area</label>
                                <div class="checkbox-group" id="geoCheckboxGroup">
                                </div>
                            </div>
                            <div class="filter-group">
                                <label class="filter-label">By Modality</label>
                                <select class="filter-select" id="typeFilter" onchange="filterSessions()">
                                    <option value="">All Modalities</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="session-list">
                        <div class="session-list__header">
                            <h2 class="session-list__title">Session Details</h2>
                            <div class="session-list__count" id="sessionCount">0 sessions found</div>
                        </div>
                        <div class="session-list__legend">
                            <span class="session-list__legend-title">Geo / Major Area:</span>
                            <div class="session-list__legend-items">
                                <div class="session-list__legend-item"><div class="session-list__legend-dot" style="background-color:#FFB6C1"></div><span>Asia & Korea</span></div>
                                <div class="session-list__legend-item"><div class="session-list__legend-dot" style="background-color:#9B59B6"></div><span>ANZ</span></div>
                                <div class="session-list__legend-item"><div class="session-list__legend-dot" style="background-color:#2ECC71"></div><span>India</span></div>
                                <div class="session-list__legend-item"><div class="session-list__legend-dot" style="background-color:#E74C3C"></div><span>Japan</span></div>
                                <div class="session-list__legend-item"><div class="session-list__legend-dot" style="background-color:#3498DB"></div><span>APAC All</span></div>
                            </div>
                        </div>
                        <div class="session-list__content" id="sessions"></div>
                    </div>
                </div>
            </div>
            <script>
                const sessions = ${sessionsJson};
                const roleChoices = ${roleChoicesJson};
                const geoChoices = ${geoChoicesJson};
                const typeChoices = ${typeChoicesJson};
                const geoColors = {
                    "asia and korea": "#FFB6C1",
                    "anz": "#9B59B6", 
                    "india": "#2ECC71",
                    "japan": "#E74C3C",
                    "apac all": "#3498DB",
                    "apac": "#3498DB"
                };

                function formatDateTime(dt) {
                    if (!dt || dt === "TBD") return "TBD";
                    try {
                        const d = new Date(dt);
                        return d.toLocaleString("en-US", {
                            month: "short", day: "numeric", year: "numeric",
                            hour: "numeric", minute: "2-digit", hour12: true
                        });
                    } catch (e) {
                        return dt;
                    }
                }

                function addToCalendar(title) {
                    alert("Add to Calendar functionality for: " + title + "\\nThis is a dummy button - calendar integration will be implemented later.");
                }

                function displaySessions(list) {
                    const container = document.getElementById("sessions");
                    const count = document.getElementById("sessionCount");
                    count.textContent = list.length + " session" + (list.length !== 1 ? "s" : "") + " found";
                    
                    if (list.length === 0) {
                        container.innerHTML = '<div class="session-list__empty"><p>No sessions match your current filters.</p><p>Try adjusting your filter criteria or clearing all filters to see available sessions.</p></div>';
                        return;
                    }
                    
                    container.innerHTML = list.map(s => {
                        const geoColor = geoColors[s.geo_area.toLowerCase()] || "#95A5A6";
                        const geoName = s.geo_area;
                        const typeChoice = typeChoices.find(t => t.value === s.type);
                        const typeName = typeChoice ? typeChoice.label : s.type;
                        const roleName = s.target_roles;
                        const statusName = s.status || "Planning";
                        const timezoneName = s.timezone || "UTC";
                        
                        return \`
                            <div class="session-card">
                                <div class="session-card__header">
                                    <div class="session-card__title-row">
                                        <div class="session-card__geo-indicator" style="background-color:\${geoColor}" title="\${geoName}"></div>
                                        <h3 class="session-card__title">\${s.title}</h3>
                                    </div>
                                    <div class="session-card__calendar-button">
                                        <button class="btn btn--small" onclick="addToCalendar('\${s.title.replace(/'/g, "\\\\'")}\')" title="Add to calendar">📅 Add to Calendar</button>
                                    </div>
                                </div>
                                \${s.description ? \`<div class="session-card__description">\${s.description}</div>\` : ""}
                                <div class="session-card__meta-grid">
                                    <div class="session-card__meta-item">
                                        <span class="session-card__label">Role</span>
                                        <span class="session-card__value">\${roleName}</span>
                                    </div>
                                    <div class="session-card__meta-item">
                                        <span class="session-card__label">Modality</span>
                                        <span class="session-card__value">\${typeName}</span>
                                    </div>
                                    <div class="session-card__meta-item">
                                        <span class="session-card__label">Geography</span>
                                        <span class="session-card__value">\${geoName}</span>
                                    </div>
                                    <div class="session-card__meta-item">
                                        <span class="session-card__label">Start Time</span>
                                        <span class="session-card__value">\${formatDateTime(s.start_time)}</span>
                                    </div>
                                    <div class="session-card__meta-item">
                                        <span class="session-card__label">Presenter</span>
                                        <span class="session-card__value">\${s.presenter || "TBD"}</span>
                                    </div>
                                    <div class="session-card__meta-item">
                                        <span class="session-card__label">Status</span>
                                        <span class="session-card__value">\${statusName}</span>
                                    </div>
                                    <div class="session-card__meta-item">
                                        <span class="session-card__label">End Time</span>
                                        <span class="session-card__value">\${formatDateTime(s.end_time)}</span>
                                    </div>
                                    <div class="session-card__meta-item">
                                        <span class="session-card__label">Timezone</span>
                                        <span class="session-card__value">\${timezoneName}</span>
                                    </div>
                                </div>
                                \${s.virtual_link || s.max_attendees || s.prerequisites || s.tags ? \`
                                    <div class="session-card__details">
                                        \${s.virtual_link ? \`<div><strong>Virtual Link:</strong> <a href="\${s.virtual_link}" target="_blank" class="session-card__link">Join Meeting</a></div>\` : ""}
                                        \${s.max_attendees ? \`<div><strong>Max Attendees:</strong> \${s.max_attendees}</div>\` : ""}
                                        \${s.prerequisites ? \`<div><strong>Prerequisites:</strong> \${s.prerequisites}</div>\` : ""}
                                        \${s.tags ? \`<div class="session-card__tag-list">\${s.tags.split(",").map(tag => \`<span class="session-card__tag">\${tag.trim()}</span>\`).join("")}</div>\` : ""}
                                    </div>
                                \` : ""}
                            </div>
                        \`;
                    }).join("");
                }

                function filterSessions() {
                    const role = document.getElementById("roleFilter").value;
                    const type = document.getElementById("typeFilter").value;
                    const geoCheckboxes = document.querySelectorAll("#geoCheckboxGroup input[type=checkbox]:checked");
                    const selectedGeos = Array.from(geoCheckboxes).map(cb => cb.value);
                    
                    const filtered = sessions.filter(s => {
                        const matchesRole = !role || s.target_roles.toLowerCase().includes(role.toLowerCase());
                        const matchesGeo = selectedGeos.length === 0 || selectedGeos.some(geo => s.geo_area.toLowerCase() === geo.toLowerCase());
                        const matchesType = !type || s.type === type;
                        return matchesRole && matchesGeo && matchesType;
                    });
                    
                    displaySessions(filtered);
                }

                function applyDateFilter() {
                    const startDate = document.getElementById("startDateFilter").value;
                    const endDate = document.getElementById("endDateFilter").value;
                    if (!startDate || !endDate) {
                        alert("Please select both start and end dates");
                        return;
                    }
                    const currentUrl = new URL(window.location);
                    currentUrl.searchParams.set("start_date", startDate);
                    currentUrl.searchParams.set("end_date", endDate);
                    window.location.href = currentUrl.toString();
                }

                function clearFilters() {
                    const currentUrl = new URL(window.location);
                    currentUrl.searchParams.delete("start_date");
                    currentUrl.searchParams.delete("end_date");
                    window.location.href = currentUrl.toString();
                }

                function initializeFilters() {
                    const roleSelect = document.getElementById("roleFilter");
                    roleChoices.forEach(role => {
                        roleSelect.insertAdjacentHTML("beforeend", \`<option value="\${role.label}">\${role.label}</option>\`);
                    });

                    const geoCheckboxGroup = document.getElementById("geoCheckboxGroup");
                    geoChoices.forEach((geo, index) => {
                        geoCheckboxGroup.insertAdjacentHTML("beforeend", \`
                            <div class="checkbox-item">
                                <input type="checkbox" id="geo_\${index}" value="\${geo.label}" onchange="filterSessions()">
                                <label for="geo_\${index}">\${geo.label}</label>
                            </div>
                        \`);
                    });

                    const typeSelect = document.getElementById("typeFilter");
                    typeChoices.forEach(type => {
                        typeSelect.insertAdjacentHTML("beforeend", \`<option value="\${type.value}">\${type.label}</option>\`);
                    });

                    document.getElementById("startDateFilter").value = "${displayStartDate}";
                    document.getElementById("endDateFilter").value = "${displayEndDate}";
                }

                initializeFilters();
                displaySessions(sessions);
            </script>
        </body>
        </html>
    `;
    
    var writer = response.getStreamWriter();
    writer.writeString(html);
}