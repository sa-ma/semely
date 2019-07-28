import React from 'react';
import styled from 'styled-components';


const Form = styled.form`
  width: 100%;

  @media (min-width: 768px){
    width: 50%;
    margin: 0 auto;
  }
`;
const InputGroup = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 0;

  input{
    display: block;
    height: 56px;
    line-height: 56px;
    font-weight: 400;
    font-size: 16px;
    border-radius: 1000px;
    padding-left: 30px;
    background: #fff;
    color: #233741;
    border: 2px solid rgba(35,55,65,.15);
    margin: 1rem;
   
    @media (min-width: 992px) { 
      width: 50%;
    }
  }
  input:focus{
    outline: none;
    border: 2px solid #eb1800;
  }

  @media (min-width: 768px){
    flex-direction: row;
  }
`;

const MemeForm = props => {
  return (
    <Form>
      <InputGroup>
        <input
          name="topText"
          onChange={props.handleChange}
          value={props.topText}
          placeholder="Enter Top Text"
        />
        <input
          name="bottomText"
          onChange={props.handleChange}
          value={props.bottomText}
          placeholder="Enter Bottom Text"
        />
      </InputGroup>
    </Form>
  )
};

export default MemeForm;
