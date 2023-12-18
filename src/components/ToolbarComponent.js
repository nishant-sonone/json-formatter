// src/components/ToolbarComponent.js
import React from 'react';
import './ToolbarComponent.css';

function ToolbarComponent({ onFormat }) {
    return (
        <div className="toolbar">
            <button onClick={onFormat} title="Format JSON">
                <i className="fas fa-magic"></i> Format
            </button>
            {/* Add more buttons with icons and tooltips */}
        </div>
    );
}

export default ToolbarComponent;
