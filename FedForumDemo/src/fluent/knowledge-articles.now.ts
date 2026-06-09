import { Record } from "@servicenow/sdk/core";

// ============================================================
// Knowledge Base for Federal Onboarding
// ============================================================
export const fedOnbKnowledgeBase = Record({
  table: "kb_knowledge_base",
  $id: Now.ID["fed_onb_kb"],
  data: {
    title: "Federal Onboarding Knowledge Base",
    description: "Knowledge articles for cleared starter onboarding processes",
    active: true,
    owner: Now.ID["user-sarah-mitchell"],
    application: "x_snc_fed_forum_on",
  },
});

// ============================================================
// KB Article 1: Security Clearance Transfer Process
// ============================================================
export const kbClearanceTransfer = Record({
  table: "kb_knowledge",
  $id: Now.ID["kb_clearance_transfer"],
  data: {
    short_description: "Security Clearance Transfer Process",
    kb_knowledge_base: Now.ID["fed_onb_kb"],
    workflow_state: "published",
    text: `<h2>Security Clearance Transfer Process</h2>
<p>When a new starter holds an existing AGSVA security clearance sponsored by another entity, the clearance must be transferred to the new sponsoring department before onboarding can proceed.</p>
<h3>Process Steps</h3>
<ol>
<li>The HR Security Team verifies the clearance level and expiry via AGSVA myClearance portal</li>
<li>A sponsorship transfer request is submitted to AGSVA</li>
<li>AGSVA processes the transfer (typically 2-5 business days)</li>
<li>Once confirmed, the orchestration record is updated to "Clearance Verified"</li>
</ol>
<h3>Clearance Levels</h3>
<ul>
<li><strong>Baseline</strong> - Access to information up to PROTECTED</li>
<li><strong>NV1 (Negative Vetting 1)</strong> - Access to SECRET information</li>
<li><strong>NV2 (Negative Vetting 2)</strong> - Access to TOP SECRET information</li>
<li><strong>PV (Positive Vetting)</strong> - Access to TOP SECRET CODEWORD information</li>
</ul>
<h3>Important Notes</h3>
<ul>
<li>Clearances must be active (not lapsed or cancelled)</li>
<li>Transfer does not change the expiry date</li>
<li>New starters cannot commence until clearance transfer is confirmed</li>
</ul>`,
  },
});

// ============================================================
// KB Article 2: Entra ID Account Provisioning
// ============================================================
export const kbEntraProvisioning = Record({
  table: "kb_knowledge",
  $id: Now.ID["kb_entra_provisioning"],
  data: {
    short_description: "Entra ID Account Provisioning for New Starters",
    kb_knowledge_base: Now.ID["fed_onb_kb"],
    workflow_state: "published",
    text: `<h2>Entra ID Account Provisioning</h2>
<p>All new starters receive a Microsoft Entra ID (formerly Azure AD) account for access to government systems.</p>
<h3>What Gets Provisioned</h3>
<ul>
<li>User Principal Name (UPN): firstname.lastname@agency.gov.au</li>
<li>Microsoft 365 E5 Government license</li>
<li>GovTeams collaboration platform access</li>
<li>Multi-Factor Authentication (MFA) enrollment via Microsoft Authenticator</li>
</ul>
<h3>Timeline</h3>
<p>Accounts are provisioned after the onboarding initiation flow completes. The process typically takes 5-10 minutes for the automated steps.</p>
<h3>Day 1 Actions</h3>
<p>On their first day, new starters will:</p>
<ol>
<li>Set their initial password via the Self-Service Password Portal</li>
<li>Register their mobile device for MFA</li>
<li>Activate their Microsoft 365 apps</li>
</ol>`,
  },
});

// ============================================================
// KB Article 3: Building Access & Security Pass
// ============================================================
export const kbBuildingAccess = Record({
  table: "kb_knowledge",
  $id: Now.ID["kb_building_access"],
  data: {
    short_description: "Building Access and Security Pass Collection",
    kb_knowledge_base: Now.ID["fed_onb_kb"],
    workflow_state: "published",
    text: `<h2>Building Access & Security Pass</h2>
<p>New starters are issued a building security pass before their first day.</p>
<h3>Access Zones</h3>
<p>Standard access includes:</p>
<ul>
<li>Assigned floor/level</li>
<li>Kitchen and amenities</li>
<li>Meeting rooms</li>
<li>End-of-trip facilities</li>
</ul>
<h3>After-Hours Access</h3>
<p>After-hours access must be separately approved by the Branch Director and is not granted by default.</p>
<h3>Day 1 Collection</h3>
<p>Security passes are collected from Building Security Reception on Level G. You must present:</p>
<ol>
<li>Government-issued photo ID (passport or driver licence)</li>
<li>A photo will be taken for the security pass</li>
</ol>
<h3>Lost or Damaged Pass</h3>
<p>Report lost passes immediately to Building Security (ext. 5555) and your manager. A replacement pass will be issued within 24 hours.</p>`,
  },
});

// ============================================================
// KB Article 4: Day One Checklist
// ============================================================
export const kbDayOneChecklist = Record({
  table: "kb_knowledge",
  $id: Now.ID["kb_day_one_checklist"],
  data: {
    short_description: "New Starter Day One Checklist",
    kb_knowledge_base: Now.ID["fed_onb_kb"],
    workflow_state: "published",
    text: `<h2>Day One Checklist</h2>
<p>Welcome! Here is your Day 1 checklist to get you started:</p>
<h3>Before Arriving</h3>
<ul>
<li>Confirm start time and location with your manager</li>
<li>Bring government-issued photo ID for security pass</li>
</ul>
<h3>Morning</h3>
<ol>
<li>Collect security pass from Level G reception</li>
<li>Meet your manager/buddy on your assigned floor</li>
<li>Set up your workstation (IT Service Desk can help: ext. 1234)</li>
<li>Set initial password and register MFA on your mobile</li>
</ol>
<h3>Afternoon</h3>
<ol>
<li>Complete mandatory WHS induction (online - 30 minutes)</li>
<li>Review the APS Code of Conduct (online - 20 minutes)</li>
<li>Complete Information Security Awareness training</li>
<li>Join your team channel on GovTeams</li>
</ol>`,
  },
});

// ============================================================
// KB Article 5: IT Equipment & Software
// ============================================================
export const kbITEquipment = Record({
  table: "kb_knowledge",
  $id: Now.ID["kb_it_equipment"],
  data: {
    short_description: "IT Equipment and Software for New Starters",
    kb_knowledge_base: Now.ID["fed_onb_kb"],
    workflow_state: "published",
    text: `<h2>IT Equipment & Software</h2>
<h3>Standard Issue</h3>
<ul>
<li>Department laptop (Surface Pro or equivalent)</li>
<li>Monitor, keyboard, and mouse at workstation</li>
<li>Headset for Teams calls</li>
</ul>
<h3>Software Included</h3>
<ul>
<li>Microsoft 365 suite (Outlook, Teams, Word, Excel, PowerPoint)</li>
<li>GovTeams collaboration platform</li>
<li>Adobe Acrobat Reader</li>
<li>Department intranet access</li>
</ul>
<h3>Additional Software Requests</h3>
<p>If you need additional software, submit a request through the IT Service Catalog. Your manager must approve requests for licensed software.</p>
<h3>Support</h3>
<p>Contact the IT Service Desk: ext. 1234 or servicedesk@agency.gov.au</p>`,
  },
});

// ============================================================
// KB Article 6: Mandatory Training Requirements
// ============================================================
export const kbMandatoryTraining = Record({
  table: "kb_knowledge",
  $id: Now.ID["kb_mandatory_training"],
  data: {
    short_description: "Mandatory Training for New Starters",
    kb_knowledge_base: Now.ID["fed_onb_kb"],
    workflow_state: "published",
    text: `<h2>Mandatory Training</h2>
<p>All new starters must complete the following training within their first two weeks:</p>
<h3>Week 1 (Days 1-5)</h3>
<ol>
<li><strong>WHS Induction</strong> - 30 minutes online</li>
<li><strong>APS Code of Conduct</strong> - 20 minutes online</li>
<li><strong>Information Security Awareness</strong> - 45 minutes online</li>
<li><strong>Fraud Awareness</strong> - 15 minutes online</li>
</ol>
<h3>Week 2 (Days 6-10)</h3>
<ol>
<li><strong>Cultural Awareness</strong> - 1 hour online</li>
<li><strong>Privacy and Information Management</strong> - 30 minutes online</li>
<li><strong>Protective Security</strong> - 45 minutes online</li>
</ol>
<h3>How to Access</h3>
<p>All training is available via the Learning Management System (LMS). Access via the department intranet under "My Learning".</p>`,
  },
});

// ============================================================
// KB Article 7: Key Contacts & Support
// ============================================================
export const kbKeyContacts = Record({
  table: "kb_knowledge",
  $id: Now.ID["kb_key_contacts"],
  data: {
    short_description: "Key Contacts and Support Channels",
    kb_knowledge_base: Now.ID["fed_onb_kb"],
    workflow_state: "published",
    text: `<h2>Key Contacts & Support</h2>
<h3>IT Support</h3>
<ul>
<li><strong>IT Service Desk</strong>: ext. 1234 | servicedesk@agency.gov.au</li>
<li><strong>Hours</strong>: Mon-Fri 7am-7pm AEST</li>
</ul>
<h3>HR Support</h3>
<ul>
<li><strong>HR Shared Services</strong>: ext. 2345 | hr@agency.gov.au</li>
<li><strong>Payroll queries</strong>: payroll@agency.gov.au</li>
</ul>
<h3>Building & Facilities</h3>
<ul>
<li><strong>Building Security</strong>: ext. 5555 (24/7)</li>
<li><strong>Facilities Management</strong>: ext. 3456</li>
</ul>
<h3>Security</h3>
<ul>
<li><strong>Departmental Security Adviser</strong>: security@agency.gov.au</li>
<li><strong>Report security incidents</strong>: ext. 9999 (24/7)</li>
</ul>`,
  },
});
