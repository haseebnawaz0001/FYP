"use client";
import "./Editor.css";
import { React, useCallback, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
// import { lang_json } from "@codemirror/lang-json";

const Editor = ({ value, setValue }) => {
  // const [value, setValue] = useState("{}");
  const onChange = useCallback((val, viewUpdate) => {
    setValue(val);
  }, []);
  return (
    <CodeMirror
      className="myEditor"
      value={value}
      height="100%"
      theme={"light"}
      // extensions={lang_json}
      onChange={onChange}
    />
  );
};

export default Editor;
