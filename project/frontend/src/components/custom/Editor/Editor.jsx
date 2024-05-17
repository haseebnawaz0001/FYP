import "./Editor.css";
import { React, useCallback, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";


const Editor = ({ value, setValue }) => {
  const onChange = useCallback((val, viewUpdate) => {
    setValue(val);
  }, []);

  

  return (
    <CodeMirror
      className="myEditor"
      value={value}
      height="100%"
      theme={"light"}
      onChange={onChange}
      basicSetup={{
        foldGutter: false,
        dropCursor: false,
        allowMultipleSelections: false,
        indentOnInput: false,
      }}
    />
  );
};

export default Editor;



