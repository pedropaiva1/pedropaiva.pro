import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  animation: loadAnimation;
  animation-duration: 500ms;
  margin-top: 30px;

  img {
    -webkit-box-shadow: 10px 10px 71px -15px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 71px -15px rgba(0, 0, 0, 0.75);
    box-shadow: 10px 10px 71px -15px rgba(0, 0, 0, 0.75);
    border-radius: 50%;
    border: dashed 2px #50fa7b;
  }

  section {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
    margin-top: 25px;
  }

  form > h1 {
    margin-bottom: 10px;
  }

  form > input {
    margin-top: 5px;
    width: 700px;
    padding: 10px 15px;
    border-radius: 6px;
    font-weight: 400;

    transition: all 0.2s linear;
  }

  input:focus {
    border: 1px solid #50fa7b;
  }

  form > input,
  textarea {
    margin-top: 5px;
    border: 1px solid transparent;
    background-color: #282a36;
    color: #e1e1e6;
  }

  textarea {
    border-radius: 6px;
    width: 700px;
    padding: 10px 15px;
    font-weight: 400;
    font-family: 'Roboto' sans-serif;
    overflow-y: hidden;
    resize: none;
    height: 100px;
    border: 1px solid transparent;
    transition: all 0.2s linear;
  }

  textarea:focus {
    border: 1px solid #50fa7b;
  }

  p {
    margin-left: 10px;
  }

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  button {
    margin-top: 10px;
    width: 80px;
    height: 30px;
    border-radius: 6px;
    font-weight: 600;
    background-color: #282a36;
    color: #e1e1e6;
    border: 1px solid transparent;
    transition: all 0.2s linear;
  }

  button:hover {
    border: 1px solid #50fa7b;
    -webkit-box-shadow: 10px 10px 117px -23px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 117px -23px rgba(0, 0, 0, 0.75);
    box-shadow: 10px 10px 117px -23px rgba(0, 0, 0, 0.75);
  }

  @media (max-width: 750px) {
    textarea {
      width: 425px;
    }

    #name,
    #subject,
    #email {
      width: 425px;
    }
  }

  @media (max-width: 450px) {
    img {
      display: none;
    }

    aside {
      margin-left: 0;
    }

    section > div {
      display: none;
    }

    textarea {
      width: 300px;
    }

    #name,
    #subject,
    #email {
      width: 300px;
    }
  }
`

export const SocialNetworks = styled.aside`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    text-decoration: none;
    color: #e1e1e6;
    justify-content: start;
    width: 100%;
  }

  a > svg {
    margin-right: 10px;
    color: #e1e1e6;
  }

  a > p {
    font-size: 17px;
  }
`
