import styled from 'styled-components'

export const Container = styled.div`
  height: 150px;
  width: 300px;
  display: flex;
  flex-direction: column;
  margin: 40px;
  border-radius: 10px;
  text-align: start;
  word-wrap: break-word;

  h1 {
    margin-top: 5px;
    font-size: 1.25rem;
    text-align: start;
  }

  p {
    font-size: 15px;
    margin-bottom: 8px;
    font-weight: 100;
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
    transition: 0.2s ease;
  }

  .box:hover {
    border: dashed 1px;
    border-color: #50fa7b;
    cursor: pointer;
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
