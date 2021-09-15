import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Gugi&display=swap'); 

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    font-family: 'Gugi', cursive;
    height: 100vh;
    background-color: #101010;
    color: #d4d4d4;
  }
`;

export default GlobalStyle;