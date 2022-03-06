import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #873EFF;
    --secondary: #04D361;
    --primary-dark: #0E091B;
    --dark-200: #171228;
    --text: #AEAEAE;
    --title: #F9f9f9;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    background-color: var(--primary-dark);
    color: var(--title);
    font-family: 'IBM Plex Mono', monospace;
  }

  a, button {
    cursor: pointer;
    font-family: 'DM Sans', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  .container {
    max-width: 1080px;
    margin: 0 auto;
  }

  @keyframes slideup {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
     }
  }

  @-webkit-keyframes slide {
    100% { 
      left: 0; 
      opacity: 1;
    }
  }

  @keyframes slide {
    100% { 
      left: 0; 
      opacity: 1;
    }
  }

`;