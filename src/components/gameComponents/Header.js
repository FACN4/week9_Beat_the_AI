import React from "react";
// import "../../styles/header";
import styled from 'styled-components';

const Styled_h1 = styled.h1`
  margin: 0px;
  padding: 10px 0px;
  background-color: rgb(82, 199, 76);
  text-align: center;
  color: white;
  font-size: 40px;
  font-family: 'Anton', sans-serif;
  letter-spacing: 3px;
`
// const Alt_h1 = styled(StyledHeader)`
//   background: blue;
// `

export const Header = () => (
  <header>
    <Styled_h1>Beat the AI</Styled_h1>
  </header>
);
