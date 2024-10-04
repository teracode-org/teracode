import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';


function CodeEditor() {
  return (
    <Editor height="100%" defaultLanguage="python" defaultValue="# Start here" />
  )
}

export default CodeEditor;
