// src/components/EditorComponent.js
import React from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-github';
import './EditorComponent.css'; // Add your CSS file for styling
import ace from 'ace-builds/src-noconflict/ace';
ace.config.set('basePath', '/'); // Or '/js/' if you created a js subdirectory
ace.config.setModuleUrl('ace/mode/json_worker', '/worker-json.js'); // Adjust the path if necessary


function EditorComponent({ jsonInput, onJsonChange }) {
    return (
        <div className="editor-container">
        <label htmlFor="JSON_EDITOR">Input JSON</label>
            <AceEditor
                mode="json"
                theme="github"
                value={jsonInput}
                onChange={onJsonChange}
                name="JSON_EDITOR"
                editorProps={{ $blockScrolling: true }}
                className="editor"
            />
        </div>
    );
}

export default EditorComponent;
