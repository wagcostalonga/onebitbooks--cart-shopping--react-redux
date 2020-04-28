import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100vh;
  }

  body {
    font: 400 14px Roboto, sans-serif;
    background: #f0f0f5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  section {
    max-width: 1200px;
    margin: 64px auto;
    padding: 0 20px;
  }

  input, button, textarea {
    font: 400 14px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;