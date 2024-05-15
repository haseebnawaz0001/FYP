"use client";
import Editor from "@monaco-editor/react";
import "monaco-editor/dev/vs/editor/editor.main.css";
import "./Editor.css";
import themes from "./theme";

const MyEditor = () => {
  console.log(themes);
  const code =
    '#include <iostream> \nusing namespace std; \nint main() \n{\ncout<<"Hello world";\nreturn 0;\n}';
  return (
    <Editor
      className="myEditor"
      height="100%"
      width="100%"
      language="cpp"
      theme={themes.Dark1}
      value={code}
      options={{
        inlineSuggest: true,
        fontSize: "16px",
        formatOnType: true,
        autoClosingBrackets: true,
        minimap: { enabled: false },
        scrollBeyondLastLine: false,
      }}
    />
  );
};

export default MyEditor;
