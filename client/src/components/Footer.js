import React from 'react'
import styled from 'styled-components';

const Footer = () => {
  const Footer = styled.footer`
    background-color: rgb(35,55,65);
    color: white;
    padding: 2rem 0;
    text-align: center;
    width: 100%;
    font-size: 1.2em;
    margin-top: 3rem;
  `;
  const Link = styled.a`
    color: white;
    pointer: cursor;
    text-decoration: none;

    :hover{
      color: #eb1800;
      text-decoration: underline;
    }
  `;
  return (
    <Footer>
      Made with
      <span role="img" aria-label="heart">❤️ </span> and
      <span role="img" aria-label="coffee"> ☕ </span>
      by <Link href="https://samailabala.com"> SAMA</Link>
    </Footer>
  )
}

export default Footer
