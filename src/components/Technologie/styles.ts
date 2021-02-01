import styled from 'styled-components'

export const Container = styled.div`
  height: 150px;
  width: 300px;
  display: flex;
  flex-direction: column;
  margin: 30px;
  border-radius: 10px;
  text-align: start;
  word-wrap: break-word;

  h1 {
    margin-top: 5px;
    font-size: 1.25rem;
    text-align: start;
    font-weight: 700;
  }

  p {
    font-size: 15px;
    margin-bottom: 8px;
    font-weight: 400;
  }

  .box {
    padding: 10px 15px 0 15px;
    text-align: start;
    text-decoration: none;
    color: #e1e1e6;
    width: 100%;
    height: 100%;
    border: 1px solid;
    border-color: #282a36;
    border-radius: 7px;
    transition: all 0.2s linear;
    background-color: #282a36;
  }

  .box:hover {
    border: solid 1px #50fa7b;
    -webkit-box-shadow: 10px 10px 117px -23px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 117px -23px rgba(0, 0, 0, 0.75);
    box-shadow: 10px 10px 117px -23px rgba(0, 0, 0, 0.75);
  }

  div > a {
    margin-top: 30px;
    color: #0691f9;
    border: none;
    text-align: start;
    text-decoration: none;
  }

  div > a:hover {
    text-decoration: underline;
  }
`
