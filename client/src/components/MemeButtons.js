import React from 'react'
import styled from 'styled-components';

const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
`;
const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 1em 2em;
  border-radius: 8px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  font-weight: 700;
`;
const GenerateButton = styled(Button)`
  background-color: transparent;
  border: 2px solid #eb1800;
  color: #eb1800;

  :hover{
    color: white;
    background-color: #eb1800;
  }  
`
const DownloadButton = styled(Button)`
  background-color: #4CAF50;
  border: 2px solid #4CAF50;
  color: white;

  :hover{
    color: #4CAF50;
    background-color: transparent;
  }  
`

const MemeButtons = props => {
  return (
    <ButtonArea>
      <GenerateButton onClick={props.handleGenerate}>Generate Image</GenerateButton>
      <DownloadButton onClick={props.handleDownload}>Download</DownloadButton>
    </ButtonArea>
  )
}

export default MemeButtons
