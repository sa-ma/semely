import React from 'react';
import styled from 'styled-components';

const Header = () => {
  const Header = styled.header`
    background-color: white;
    border-bottom: 1px solid rgba(35,55,65,.15);
    font-weight: normal;
    padding: 1.5rem;
    width:100%;
  `;
  const Title = styled.h1`
    text-align: center;
    font-family: 'Montserrat', cursive;
    text-transform: lowercase;
    color: #eb1800;
    font-weight: bold;
    font-size: 1.7em;
  `;
  return (
    <Header>
      <Title>semely</Title>
    </Header>
  )
}

export default Header;