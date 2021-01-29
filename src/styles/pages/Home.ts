import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  animation: loadAnimation;
  animation-duration: 500ms;

  .photo {
    -webkit-box-shadow: 10px 10px 71px -15px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 71px -15px rgba(0, 0, 0, 0.75);
    box-shadow: 10px 10px 71px -15px rgba(0, 0, 0, 0.75);
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    border: 2px;
    border-style: dashed;
    border-color: #50fa7b;
  }
`

export const Description = styled.p`
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  -webkit-box-shadow: 10px 10px 40px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 40px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 40px 0px rgba(0, 0, 0, 0.75);
  padding: 0 6px;
  margin-top: 95px;
  font-size: 20px;
  background-color: #50fa7b;
  border-radius: 8px;
  color: #282a36;
  @media (max-width: 750px) {
    text-align: center;
    margin: 70px 10px;
  }
`
export const SocialNetworks = styled.div`
  display: flex;
  height: 100px;
  align-items: center;
  justify-content: center;
  margin-top: 30px;

  a {
    text-decoration: none;
    color: #fff;
    align-items: center;
    margin: 0 50px;
  }
`
