import React, { useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

const CodeEditor = () => {
    const [code, setCode] = useState('');
    const [language, setLanguage] = useState('html');

    const handleCodeChange = (event) => {
        setCode(event.target.value);
    };

    const getLanguageClass = () => {
        return 'html';
    };

    const highlightCode = (code) => {
        return Prism.highlight(code, Prism.languages[language], language);
    };

    return (
        <div className='container'>

            <div style={{ marginBottom: '1rem' }}>
                HTML
            </div>
            <textarea
                value={code}
                onChange={handleCodeChange}
                style={{
                    width: '100%',
                    height: '300px',
                    opacity: 1,
                    caretColor: 'black',
                    border: '1px solid gray',
                    padding: '10px',
                    fontSize: '16px',
                }}
            />
            <pre
                style={{
                    backgroundColor: 'black',
                    color: 'white',
                    padding: '10px',
                    fontSize: '16px',
                    overflow: 'auto',
                    border: '1px solid gray',
                    height: '300px',
                    position: 'relative',
                    whiteSpace: 'pre-wrap',
                    wordWrap: 'break-word',
                }}
            >
                <code
                    className={getLanguageClass()}
                    dangerouslySetInnerHTML={{ __html: highlightCode(code) }}
                    style={{ all: 'unset', display: 'block' }}
                />
            </pre>
        </div>
    );
};

export default CodeEditor;
