import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";


const Container = styled.div`
    width: 50%;
    height: 100%;
    padding: 13px;
    font-family: 'Lato', sans-serif;
    `;

    const Title = styled.div`
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 1em;
    padding: 8px 0;
    border-bottom: 1px solid rgba(15, 15, 15, 0.3);
    `;

    const ResultArea = styled.div`
        width: 100%;
        height: 100%;
        border: none;
        font-size: 17px;
        `;

        const markdown = `
        # Header 1
        ## Header 2
      
        _ italic _
      
        ** bold **
      
        <b> bold Html </b>
        `;

        export function Result(props) {

            return(
                <Container>
                    <Title>Converted Text</Title>
                    <ResultArea>
                        <ReactMarkdown>
                        {markdown}
                        </ReactMarkdown>

                        <ReactMarkdown children={markdown} />
                        
                    </ResultArea>

                </Container>
            )
        }