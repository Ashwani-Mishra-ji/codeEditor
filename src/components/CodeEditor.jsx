import React, { useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai'; 

const CodeEditor = () => {
  const [code, setCode] = useState(''); 
  const [output, setOutput] = useState('');
  const [locked, setLocked] = useState(false);

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };


  const handleCopyClick = () => {
    navigator.clipboard.writeText(code);
  };

  const handleSaveClick = () => {
   
    console.log('Code saved:', code);
  };

  const handleLockToggle = () => {
    setLocked((prevLocked) => !prevLocked);
  };

  const handleExecute = () => {
    try {
      const codeFunction = eval(code);
      const result = codeFunction();
      setOutput(result);
    } catch (error) {
      setOutput(`Error: ${error}`);
    }
  };
  

 
  return (
    <div className="code-editor">
      <div className="editor-toolbar">
        <button onClick={handleCopyClick}>Copy</button>
        <button onClick={handleSaveClick}>Save</button>

        <button onClick={handleLockToggle}>{locked ? 'Unlock' : 'Lock'}</button>
      </div>
     

      <AceEditor
        mode="javascript"
        theme="monokai"
        value={code}
        onChange={ setCode}

        fontSize={14}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        readOnly={locked}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
        }}
        style={{ width: '100%', height: '300px' }}
      />
      <button onClick={handleExecute}>Run</button>
      <div>
        <h3>Output:</h3>
        <div>
       <pre>{output}</pre>
       {
         console.log({output})
       }
        </div>
      </div>
      
     
    </div>
  );
};

export default CodeEditor;
