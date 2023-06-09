import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #202024;
    --white: #FFFFFF;
    --black2: #121214;
    --green-light: #00875F;
    --green: #33CC95;
    --red: #E62E4D;
    --green2: #015F43;
    --back3: #29292E
    --title: #363F5F;
    --text-head: #C4C4CC;
    --shape: #323238;

  }


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
        font-size: 93.75%;
    }

    @media(max-width: 720px) {
        font-size: 87.5%;
    }
  }

  body, input, textarea, button {
     font-family: 'Poppins', sans-serif;
     font-weight: 400;
  }

  h1,h2,h3,h4,h5,h6, strong {
    font-weight: 600;
  } 

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5 );
    
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: var(--shape );
    padding: 3rem;
    position: relative;
    border-radius: 0.24rem;

  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8) ;
    }
  }

`