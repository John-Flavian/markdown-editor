import React from "react";
import styled from "styled-components";
import { MarkedInput } from "./components/marked-input";
import { Result } from "./components/result";
import EditorContext from "./components/editorContext";
import { useState } from "react";


const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  `;

  const Title = styled.div`
    font-size: 25px;
    font-weight: 700;
    font-family: "Lato", sans-serif;
    margin-bottom: 1em;
    `;

    const EditorContainer = styled.div`
      width: 100%;
      height: 100%;
      display: flex;
      `;

function App() {

    const [markdownText, setMarkdownText] = useState("");

    const contextValue = {
      markdownText, setMarkdownText
    }; 

  return (
    <EditorContext.Provider value={contextValue}>
    <AppContainer>
      <Title>Markdown Editor </Title>
      <EditorContainer> 
        <MarkedInput />
        <Result />
      </EditorContainer>

    </AppContainer>
    </EditorContext.Provider>
  );
}

export default App;
