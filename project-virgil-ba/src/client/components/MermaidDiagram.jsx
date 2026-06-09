import React, { useState } from 'react';
import { Download, Code, Eye, EyeOff } from 'lucide-react';
import './MermaidDiagram.css';

export default function MermaidDiagram({ chart, title = 'Architecture Diagram' }) {
  const [showCode, setShowCode] = useState(false);

  const downloadMermaid = () => {
    const blob = new Blob([chart], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `${title.toLowerCase().replace(/\s+/g, '-')}.mmd`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(chart).then(() => {
      // Could add a toast notification here
    });
  };

  if (!chart) {
    return (
      <div className="mermaid-container">
        <div className="mermaid-placeholder">
          <p>No diagram data available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mermaid-container">
      <div className="mermaid-header">
        <div className="mermaid-actions">
          <button 
            className="btn btn-secondary btn-small"
            onClick={() => setShowCode(!showCode)}
            title={showCode ? 'Hide code' : 'Show code'}
          >
            {showCode ? <EyeOff size={14} /> : <Eye size={14} />}
            {showCode ? 'Hide Code' : 'Show Code'}
          </button>
          
          <button 
            className="btn btn-secondary btn-small"
            onClick={downloadMermaid}
            title="Download Mermaid source"
          >
            <Code size={14} />
            Download .mmd
          </button>
        </div>
      </div>

      {showCode && (
        <div className="mermaid-code">
          <div className="code-header">
            <span>Mermaid Source</span>
            <button 
              className="btn btn-secondary btn-small"
              onClick={copyToClipboard}
              title="Copy to clipboard"
            >
              Copy
            </button>
          </div>
          <pre><code>{chart}</code></pre>
        </div>
      )}

      <div className="mermaid-diagram">
        <div className="mermaid-notice">
          <h3>Architecture Diagram Available</h3>
          <p>
            Mermaid diagram source code is available above. 
            Use the "Show Code" button to view the diagram syntax that can be rendered 
            in external tools like Mermaid Live Editor or integrated development environments.
          </p>
          <div className="diagram-actions">
            <button 
              className="btn btn-primary"
              onClick={() => window.open('https://mermaid.live', '_blank')}
            >
              Open in Mermaid Live Editor
            </button>
            <button 
              className="btn btn-secondary"
              onClick={downloadMermaid}
            >
              <Download size={16} />
              Download Source
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}