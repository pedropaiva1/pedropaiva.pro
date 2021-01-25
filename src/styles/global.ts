import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus{
    outline: 0;
  }

  html, body, #root{
    height: 100%;
  }

  body {
    color: ${props => props.theme.colors.text};
    font: 700 16px Inter, sans-serif;
  }

  body, input, button {
    font-size: 14px;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
  }

  button {
    cursor:pointer;
    border: 0;
  }

`
