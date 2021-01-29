import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  animation: loadAnimation;
  animation-duration: 500ms;
  margin-top: 40px;

  img {
    border-radius: 50%;
  }

  section {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: row;
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
  }

  a > svg {
    margin-right: 10px;
    color: #e1e1e6;
  }
`
