import React, { useState } from 'react';

function CodeEditor() {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');

  const executeCode = () => {
    try {
      const codeFunction = new Function(code);
      const result = codeFunction();
      setOutput(result);
    } catch (error) {
      setOutput(`Error: ${error}`);
    }
  };

  return (
    <div>
      <div>
        <h3>Code Editor</h3>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter your code here"
        />
        <button onClick={executeCode}>Execute Code</button>
      </div>
      <div>
        <h3>Output</h3>
        <pre>{output}</pre>
      </div>
    </div>
  );
}

export default CodeEditor;
