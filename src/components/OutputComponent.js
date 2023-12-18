// src/components/OutputComponent.js
import React from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-github';
import './OutputComponent.css';

function OutputComponent({ jsonOutput, error }) {
    return (
        <div className="output-container">
            <label htmlFor="JSON_OUTPUT">Formatted JSON</label>
            {error ? (
                <p className="error">{error}</p>
            ) : (
                <AceEditor
                    mode="json"
                    theme="github"
                    value={jsonOutput}
                    readOnly={true}
                    name="JSON_OUTPUT"
                    editorProps={{ $blockScrolling: true }}
                    setOptions={{
                        showLineNumbers: false,
                        highlightActiveLine: false,
                        showPrintMargin: false,
                    }}
                    className="editor"
                />
            )}
        </div>
    );
}

export default OutputComponent;
