// src/App.js
import React, { useState } from 'react';
import HeaderComponent from './components/HeaderComponent';
import EditorComponent from './components/EditorComponent';
import ToolbarComponent from './components/ToolbarComponent';
import OutputComponent from './components/OutputComponent';
import FooterComponent from './components/FooterComponent';
import './App.css';

function App() {
    const [jsonInput, setJsonInput] = useState('');
    const [formattedJson, setFormattedJson] = useState('');
    const [error, setError] = useState('');

    const handleJsonInput = (input) => {
        setJsonInput(input);
        setFormattedJson('');
        setError('');
    };

    const formatJson = () => {
        try {
            const formatted = JSON.stringify(JSON.parse(jsonInput), null, 2);
            setFormattedJson(formatted);
            setError('');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="App">
            <HeaderComponent />
            <ToolbarComponent onFormat={formatJson} />
            <EditorComponent jsonInput={jsonInput} onJsonChange={handleJsonInput} />
            <OutputComponent jsonOutput={formattedJson} error={error} />
            <FooterComponent />
        </div>
    );
}

export default App;
