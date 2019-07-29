import React from 'react';
import styled from 'styled-components';

const MemeSection = styled.div`
  padding: 1rem;
  width: 100%;
  margin: 0 auto;
  position: relative;

  img{
    width: 100%;
    max-height: 400px;
  }

  h2{
    position: absolute;
    width: 80%;
    text-align: center;
    left: 50%;
    transform: translateX(-50%);
    margin: 15px 0;
    padding: 0 5px;
    font-family: impact, sans-serif;
    font-size: 2em;
    text-transform: uppercase;
    color: white;
    letter-spacing: 1px;
    text-shadow:
        2px 2px 0 #000,
        -2px -2px 0 #000,
        2px -2px 0 #000,
        -2px 2px 0 #000,
        0 2px 0 #000,
        2px 0 0 #000,
        0 -2px 0 #000,
        -2px 0 0 #000,
        2px 2px 5px #000;
  }
  .top{
    top: 10px;
  }
  .bottom{
    bottom: 10px;
  }
  @media (min-width: 768px){
    width: 50%;
    margin: 0 auto;
  }
`;

const Meme = props => {
  return (
    <MemeSection>
      <img src={props.randomImg} alt="meme" />
      <h2 className="top">{props.topText}</h2>
      <h2 className="bottom">{props.bottomText}</h2>
    </MemeSection>
  );
}


export default Meme;
