import { createGlobalStyle } from "styled-components";
import color from "../constants/colors";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent
  }
 
  html {  
    font-size: 16px
  }
 
  body {
    font-size: 1rem;
    font-family: 'Maven Pro', sans-serif;   
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    background-color: ${color.white}
  }
  
  p {
    color: ${color.blue};
    padding-bottom: 0.5rem
  }
  
  li {
     list-style: none;
     margin-bottom: 0.8rem
  }

  ::selection {  
    background-color: ${color.imperial};
    color: ${color.white}
  }

  :focus {
    outline: 0.1rem dotted ${color.blue};
    outline-offset: 0
  }

  button {
    cursor: pointer
  }

  ::-webkit-scrollbar-track {
    box-shadow:  inset 0 0 1rem rgba(0, 0, 0, .3);
    border-radius: 2rem;
    background-color: ${color.white}
  }

  ::-webkit-scrollbar {
    width: 0.5rem;
    background-color: ${color.white}
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 0.5rem;
    box-shadow:  inset 0 0 1rem rgba(0, 0, 0, .3);
    background-color: ${color.blue}
  }
`;
