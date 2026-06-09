# 🎯 AI Learning Day Agenda Builder

A ServiceNow application for managing and displaying AI learning sessions with public access capabilities.

## 🏆 **Golden Checkpoint Features**

### ✅ **Public Agenda Interface**
- **URL:** `/api/x_snc_ai_learnin_4/public_agenda/view`
- Professional two-column layout with filtering
- Color-coded geographic indicators  
- Dynamic filtering by Role, Geo Area, Session Type
- No authentication required - truly public access

### ✅ **Database Schema**
- **Main Table:** `x_snc_ai_learnin_4_ai_sessions` - Learning sessions
- **Role Table:** `x_snc_ai_learnin_4_role_choices` - Target role definitions
- Dynamic choices from `sys_choice` for geographic and session type options

### ✅ **Form Interface** 
- Clean form layout with NO duplicate fields
- Proper field positioning and validation
- Multi-select target roles with slushbucket interface

## 🛠 **Technical Architecture**

### **Frontend Components**
- **React UI Page:** Authenticated user interface at `/x_snc_ai_learnin_4_agenda.do`
- **Public REST API:** Unauthenticated public access with HTML response
- **Service Portal:** (Manual configuration required)

### **Backend Components**
- **Fluent DSL:** Type-safe ServiceNow metadata definitions
- **REST API Script:** Server-side filtering and HTML generation
- **ACLs:** Proper security configuration for public access

## 📁 **Project Structure**

```
src/
├── fluent/                    # ServiceNow metadata definitions
│   ├── tables/               # Database table schemas
│   ├── ui-pages/            # React-based UI pages  
│   ├── scripted-rest-apis/   # Public REST endpoints
│   ├── acls/                # Access control lists
│   └── ui-elements/         # Form field configurations
├── client/                   # React frontend code
│   ├── components/          # UI components (FilterPanel, SessionList)
│   └── services/           # API service layer
└── server/                  # Server-side scripts and utilities
    └── rest-api/           # REST API implementation
```

## 🚀 **Getting Started**

### **Prerequisites**
- ServiceNow instance with Fluent SDK support
- Node.js 18+ and npm/yarn
- ServiceNow CLI tools

### **Installation**
1. Clone this repository
2. Install dependencies: `npm install`
3. Configure `now.config.json` with your instance details
4. Build: `npm run build`
5. Deploy: `npm run install`

### **Configuration**
- Update instance URL in `now.config.json`
- Modify role choices in `x_snc_ai_learnin_4_role_choices` table
- Customize geographic areas and session types via sys_choice

## 📊 **Key Data Models**

### **AI Sessions Table**
- `title` - Session name
- `target_roles` - Multi-select from role_choices table  
- `geo_major_area` - Geographic region (choice field)
- `session_type` - Type of session (choice field)
- `start_time`, `end_time` - Session timing
- `presenter`, `location`, `virtual_link` - Session details

### **Role Choices Table**
- `name` - Internal role identifier
- `label` - Display name for role

## 🔧 **Troubleshooting**

### **Common Issues**
- **Duplicate Form Fields:** Ensure only `fix_form_elements.now.ts` is updating UI elements
- **Public Access Issues:** Verify ACLs allow unauthenticated access
- **Filter Not Working:** Check sys_choice entries match field values

### **Development Notes**
- Always UPDATE existing UI elements instead of creating new ones
- Use `authorization: false` for truly public REST endpoints  
- Query database dynamically for filter options - never hardcode

## 📝 **License**
Internal ServiceNow application - see organization policies.

---
*Built with ServiceNow Fluent SDK - A type-safe approach to ServiceNow development*