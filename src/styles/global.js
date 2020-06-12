import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0
  }
  html, body {
    height: 100%;
  }
  body {
    color: #333;
    -webkit-font-smoothing: antialiased;
    background: rgb(19, 212, 205);
  background: linear-gradient(
    180deg,
    rgba(19, 212, 205, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  }
  body, input, button {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }
  button {
    cursor: pointer
  }
`
