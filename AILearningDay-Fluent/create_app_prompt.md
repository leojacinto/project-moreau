# 🎯 AI Learning Day Agenda Builder - Complete Creation Prompt

**Use this single prompt to recreate the entire AI Learning Day Agenda Builder application in ServiceNow:**

---

## Application Overview
Create a comprehensive ServiceNow application called **"AI Learning Day Agenda Builder"** with scope `x_snc_ai_learnin_4`. This application manages learning sessions for AI training events with public access capabilities, professional filtering, and modern UI design.

## 🏗️ Core Database Schema

### Primary Sessions Table (`x_snc_ai_learnin_4_ai_sessions`)
Create table with these exact fields:
- **title**: StringColumn, 200 chars, mandatory - "Session Title"
- **description**: StringColumn, 1000 chars, optional - "Description" 
- **target_roles**: ListColumn, mandatory, references `x_snc_ai_learnin_4_role_choices`, slushbucket interface with denormalized array
- **geo_major_area**: ChoiceColumn, mandatory, dropdown_with_none:
  - `asia_korea`: "Asia and Korea"
  - `anz`: "ANZ" 
  - `india`: "India"
  - `japan`: "Japan"
  - `apac_general`: "APAC All"
- **session_type**: ChoiceColumn, mandatory, dropdown_with_none:
  - `all_session_types`: "All Session Types" (sequence 0)
  - `ma_kickoff`: "MA Kickoff"
  - `webinar_live`: "Webinar (Live)"
  - `elearning_self_paced`: "ELearning (Self-Paced)"
  - `colab`: "CoLab"
  - `in_person_discussion`: "In Person Discussion"
  - `blocked_learning_time`: "Blocked Learning Time"
- **presenter**: StringColumn, 100 chars, optional - "Presenter/Speaker"
- **start_time**: DateTimeColumn, mandatory - "Start Time"
- **end_time**: DateTimeColumn, mandatory - "End Time" 
- **timezone**: StringColumn, 50 chars, mandatory with choices:
  - `utc`: "UTC", `aest`: "AEST (UTC+10)", `aedt`: "AEDT (UTC+11)", `jst`: "JST (UTC+9)", `kst`: "KST (UTC+9)", `ist`: "IST (UTC+5:30)", `hkt`: "HKT (UTC+8)", `sgt`: "SGT (UTC+8)", `pst`: "PST (UTC-8)", `est`: "EST (UTC-5)"
- **duration_minutes**: IntegerColumn, optional - "Duration (Minutes)"
- **location**: StringColumn, 100 chars, optional - "Location/Room"
- **virtual_link**: StringColumn, 500 chars, optional - "Virtual Meeting Link"
- **max_attendees**: IntegerColumn, optional - "Maximum Attendees"
- **prerequisites**: StringColumn, 500 chars, optional - "Prerequisites"
- **tags**: StringColumn, 300 chars, optional - "Tags (comma-separated)"
- **is_featured**: BooleanColumn, default false - "Featured Session"

Table properties: display='title', actions=['read','update','create'], accessibleFrom='public', allowWebServiceAccess=true

### Role Reference Table (`x_snc_ai_learnin_4_role_choices`)
- **name**: StringColumn, 50 chars, mandatory - "Role Name" (internal identifier)
- **label**: StringColumn, 100 chars, mandatory - "Display Label"
- display='label', actions=['read'], accessible_from='public'

Pre-populate with these records:
- {name: 'ae', label: 'AE'}
- {name: 'sse', label: 'SSE'}  
- {name: 'sc', label: 'SC'}
- {name: 'ssc', label: 'SSC'}
- {name: 'gpc', label: 'GPC'}
- {name: 'crm_se', label: 'CRM SE'}
- {name: 'others', label: 'Others'}

## 🌐 Public REST API (`/api/x_snc_ai_learnin_4/public_agenda/view`)

Create RestApi with:
- **serviceId**: 'public_agenda'
- **path**: '/view'  
- **method**: 'GET'
- **authorization**: false
- **authentication**: false

**Script functionality:**
1. Accept optional query parameters: `start_date`, `end_date` (YYYY-MM-DD format)
2. Default to current week if no dates provided
3. Query `x_snc_ai_learnin_4_ai_sessions` table with date filtering on `start_time`
4. Query role choices from `x_snc_ai_learnin_4_role_choices` 
5. Query geo and session type choices dynamically from `sys_choice` table
6. Return complete HTML page with embedded CSS and JavaScript

**HTML Response Features:**
- Professional two-column layout: Filter panel (300px wide) + Session list
- Color-coded geographic indicators:
  - Asia & Korea: #FFB6C1
  - ANZ: #9B59B6  
  - India: #2ECC71
  - Japan: #E74C3C
  - APAC All: #3498DB
- Real-time filtering by Role, Geo Area, Session Type, Date Range
- Responsive card-based session display
- Modern CSS with hover effects, proper typography, mobile support
- Session cards showing: title, description, presenter, timing, location, virtual links, prerequisites, tags
- Filter legend with color dots
- Client-side JavaScript for dynamic filtering and date range application

## 🔒 Security & Access Control

Create ACLs for:
- **Sessions table**: Public read access (name: 'x_snc_ai_learnin_4_ai_sessions.*', operation: 'read', requires_role: false)
- **Role choices table**: Public read access  
- **REST API**: Public execute access
- **UI Pages**: Public access for agenda viewing
- **Service Portal widgets**: Public execute access

Create role: `ai_learning_admin` for administrative access

## ⚛️ React UI Components

### Main UI Page (`/x_snc_ai_learnin_4_agenda.do`)
Authenticated interface with React components:

**FilterPanel.jsx:**
- Dropdown selectors for Role, Geo Area, Session Type
- Date range inputs with apply/clear functionality  
- "Clear All" button
- Modern CSS styling with proper form controls

**SessionList.jsx:**
- Card-based layout with session details
- Color-coded geo indicators
- Hover effects and responsive grid
- Empty state handling

**App.jsx:**
- Main application layout
- State management for filters and sessions
- API integration with SessionService

**CSS Styling:**
- System fonts, proper spacing, modern design tokens
- Responsive breakpoints for mobile/tablet
- Accessible form controls with focus states
- Card hover animations and visual hierarchy

## 🔧 Business Logic & Validation

### Business Rules
**Timezone Validation**: Before insert/update on sessions table, ensure timezone field is populated (mandatory enforcement)

### Script Includes
- Timezone field updater utilities
- Session type cleanup functions  
- Role choice management scripts

### UI Actions
- "Cleanup Duplicates" - Remove duplicate role entries
- "Cleanup Session Types" - Clean invalid session type values

## 📱 Service Portal Integration

Create Service Portal components:
- **AI Agenda Page**: Portal page displaying sessions
- **AI Sessions Widget**: Configurable widget for session display
- **Menu Module**: Navigation integration
- Widget instances with proper configuration

## 📁 Complete File Structure

```
src/
├── fluent/
│   ├── index.now.ts (main export file)
│   ├── tables/
│   │   ├── ai_sessions.now.ts
│   │   └── role_choices.now.ts
│   ├── scripted-rest-apis/
│   │   └── public_agenda.now.ts
│   ├── ui-pages/
│   │   └── agenda_builder.now.ts  
│   ├── business-rules/
│   │   └── timezone-validation.now.ts
│   ├── acls/ (all security rules)
│   ├── roles/
│   │   └── ai_learning_roles.now.ts
│   ├── script-includes/ (utility functions)
│   ├── ui-actions/ (cleanup actions)
│   ├── service-portal/ (portal components)
│   └── records/ (data records)
├── client/
│   ├── app.jsx, main.jsx, index.html
│   ├── components/ (FilterPanel, SessionList)
│   ├── services/ (SessionService API layer)
│   └── utils/ (field definitions)
├── server/
│   ├── rest-api/ (public_agenda_script.js)
│   ├── validation/ (timezone-validation.js)
│   ├── choice-cleanup/ (data cleanup utilities)
│   └── field-update/ (timezone field updates)
└── static/
    └── ai_agenda.html (alternative static view)
```

## ✅ Key Success Criteria

1. **Public Access**: Unauthenticated users can view agenda at REST endpoint
2. **Dynamic Filtering**: Real-time filtering by role, geography, session type, date range  
3. **Professional UI**: Modern, responsive design with color-coding and proper typography
4. **Data Integrity**: Proper validation, cleanup utilities, no duplicate fields
5. **Security**: Appropriate ACLs allowing public read while securing admin functions
6. **Performance**: Client-side filtering, efficient database queries
7. **Responsive Design**: Works on desktop, tablet, and mobile devices
8. **Comprehensive Data Model**: All session details captured with proper field types

## 🚀 Implementation Notes

- Use ServiceNow Fluent DSL (.now.ts files) for all metadata definitions
- Include proper error handling and user feedback
- Query choice lists dynamically from sys_choice table (never hardcode)
- Implement timezone validation as mandatory field
- Create comprehensive documentation and README
- Build with accessibility and performance in mind
- Support both authenticated admin interface and public viewing
- Include sample data and testing utilities

## 📋 Example Implementation Commands

When creating this app, use these exact steps:

1. **Create New App**: `create_new_servicenow_app` with name "AI Learning Day Agenda Builder"

2. **Primary Table Creation**:
```typescript
// src/fluent/tables/ai_sessions.now.ts
import { Table, StringColumn, ChoiceColumn, DateTimeColumn, ListColumn, IntegerColumn, BooleanColumn } from '@servicenow/sdk/core'

export const x_snc_ai_learnin_4_ai_sessions = Table({
    name: 'x_snc_ai_learnin_4_ai_sessions',
    label: 'AI Learning Day Sessions',
    // ... complete schema as specified above
})
```

3. **REST API Creation**:
```typescript
// src/fluent/scripted-rest-apis/public_agenda.now.ts
import { RestApi } from '@servicenow/sdk/core'

RestApi({
    name: 'Public AI Agenda API',
    serviceId: 'public_agenda',
    routes: [{
        path: '/view',
        method: 'GET',
        authorization: false,
        authentication: false,
        script: Now.include('../../server/rest-api/public_agenda_script.js')
    }]
})
```

4. **Security Configuration**:
```typescript
// Create ACLs for public access
ACL({
    name: 'x_snc_ai_learnin_4_ai_sessions.*',
    operation: 'read',
    type: 'record',
    requiresRole: false
})
```

**This prompt creates a complete, production-ready ServiceNow application for managing learning sessions with professional public access, comprehensive filtering, and excellent user experience.**

---

## 🎯 Final Deliverable

The completed application will provide:
- **Public URL**: `https://[instance].service-now.com/api/x_snc_ai_learnin_4/public_agenda/view`
- **Admin Interface**: `https://[instance].service-now.com/x_snc_ai_learnin_4_agenda.do`
- **Service Portal**: Integration with portal pages and widgets
- **Mobile Responsive**: Professional interface across all devices
- **Real-time Filtering**: Dynamic session filtering without page reloads
- **Professional Design**: Modern, accessible, color-coded interface

Copy this entire prompt and paste it into a new ServiceNow development conversation to recreate the complete AI Learning Day Agenda Builder application.