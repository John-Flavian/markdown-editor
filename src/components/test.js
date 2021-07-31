import React from "react";
import ReactMarkdown from "react-markdown";

export default function Test() {
  const markdown = `
  # Header 1
  ## Header 2

  _ italic _

  ** bold **

  <b> bold Html </b>
  `;

  return (
    <div className="App">
        <h1>Testing</h1>
      <ReactMarkdown children={markdown} />
    </div>
  );
}
