import '@servicenow/sdk/global';
import { UiPage } from '@servicenow/sdk/core';

export const agenda_builder_page = UiPage({
  $id: Now.ID['agenda-builder-page-updated'],
  endpoint: 'x_snc_ai_learnin_4_agenda.do',
  html: `<!DOCTYPE html>
<html>
<head>
    <title>AI Learning Day Agenda</title>
    <style>
        body { font-family: Arial; margin: 20px; }
        .session { border: 1px solid #ccc; margin: 10px 0; padding: 15px; }
        .filters { margin-bottom: 20px; }
        input, select { margin: 5px; padding: 5px; }
    </style>
</head>
<body>
    <h1>AI Learning Day Agenda</h1>
    
    <div class="filters">
        <input type="text" id="search" placeholder="Search sessions..." onkeyup="filterSessions()">
        <select id="typeFilter" onchange="filterSessions()">
            <option value="">All Types</option>
            <option value="keynote">Keynote</option>
            <option value="technical">Technical Session</option>
            <option value="workshop">Workshop</option>
        </select>
    </div>
    
    <div id="sessions"></div>
    
    <script>
        const sessions = [
            {title: "AI and the Future of Work", type: "keynote", presenter: "Dr. Smith", time: "9:00 AM - 10:00 AM", description: "Exploring how AI will transform the workplace."},
            {title: "Machine Learning Fundamentals", type: "technical", presenter: "Jane Doe", time: "10:15 AM - 11:15 AM", description: "Introduction to ML concepts and algorithms."},
            {title: "Building AI Solutions", type: "workshop", presenter: "Bob Johnson", time: "11:30 AM - 12:30 PM", description: "Hands-on workshop for creating AI applications."}
        ];
        
        function displaySessions(sessionsToShow) {
            const container = document.getElementById('sessions');
            container.innerHTML = sessionsToShow.map(session => \`
                <div class="session">
                    <h3>\${session.title}</h3>
                    <p><strong>Time:</strong> \${session.time}</p>
                    <p><strong>Presenter:</strong> \${session.presenter}</p>
                    <p><strong>Type:</strong> \${session.type}</p>
                    <p>\${session.description}</p>
                </div>
            \`).join('');
        }
        
        function filterSessions() {
            const search = document.getElementById('search').value.toLowerCase();
            const type = document.getElementById('typeFilter').value;
            
            const filtered = sessions.filter(session => {
                const matchesSearch = session.title.toLowerCase().includes(search) || 
                                    session.presenter.toLowerCase().includes(search);
                const matchesType = !type || session.type === type;
                return matchesSearch && matchesType;
            });
            
            displaySessions(filtered);
        }
        
        displaySessions(sessions);
    </script>
</body>
</html>`,
  direct: true
});