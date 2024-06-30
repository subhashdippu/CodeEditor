// src/CodeEditor.js
import React, { useState } from 'react';
import Prism from 'prismjs';
import "prismjs/themes/prism.css";
import { Highlight, themes } from 'prism-react-renderer';

const CodeEditor = () => {
    const [code, setCode] = useState('');

    const handleCodeChange = (event) => {
        setCode(event.target.value);
    };

    return (
        <div className='container'>


            <div style={{ position: 'relative', fontFamily: 'monospace' }}>
                <textarea
                    value={code}
                    onChange={handleCodeChange}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        opacity: 1,
                        zIndex: 1,
                        color: 'transparent',
                        backgroundColor: 'transparent',
                        caretColor: 'black',
                        border: '1px solid #ccc',
                        padding: '10px',
                        fontSize: '16px',
                    }}
                />
                <Highlight
                    theme={themes.github}
                    Prism={Prism}
                    code={code}
                    language="html"
                >
                    {({ style, tokens, getLineProps, getTokenProps }) => (
                        <pre style={{
                            margin: 0,
                            padding: '10px',
                            fontSize: '16px',
                            overflow: 'auto',
                            border: '1px solid #ccc',
                        }}>
                            {tokens.map((line, i) => (
                                <div {...getLineProps({ line, key: i })}>
                                    {line.map((token, key) => (
                                        <span {...getTokenProps({ token, key })} />
                                    ))}
                                </div>
                            ))}
                        </pre>
                    )}
                </Highlight>
            </div>
        </div>
    );
};

export default CodeEditor;
