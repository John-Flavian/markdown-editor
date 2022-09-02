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

const Title = styled.h1`
  font-weight: 700;
  font-family: "Lato", sans-serif;
  margin-bottom: 1em;
  `;

const EditorContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  `;

const Footer = styled.div`
  width: 100%;
  bottom: 0;
`

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
      <Footer>
        <p>
          <b> &copy; <a href="https://github.com/John-Flavian">John Flavian</a> 2020.</b>
        </p>
        <p>
          View this code on <a href="https://github.com/John-Flavian/markdown-editor"> GitHub.</a>
        </p>  
      </Footer>
    </EditorContext.Provider>
  );
}

export default App;
