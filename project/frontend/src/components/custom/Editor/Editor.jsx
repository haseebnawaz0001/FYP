import "./Editor.css";
import { React, useCallback, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

const Editor = ({ value, setValue }) => {
  const onChange = useCallback((val) => {
    setValue(val);
  }, []);
  useEffect(() => {
    // try {
    //   const parsedValue = JSON.parse(value);
    //   const pseudoCodes = parsedValue.map(node => node.data.PseudoCode);
    //   setValue(JSON.stringify(pseudoCodes, null, 2));
    // } catch (e) {
    //   console.error("Error parsing JSON:", e);
    //   setValue(value);
    // }
    setValue(value)
  }, [value]);

 
  return (
    <CodeMirror
      className="myEditor"
      value={value}
      height="100%"
      theme={"light"}
      onChange={onChange}
      extensions={[javascript()]}
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
