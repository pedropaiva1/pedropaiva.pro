import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #383a59;
  text-align: center;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='12' viewBox='0 0 20 12'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='charlie-brown' fill='%23282a36' fill-opacity='0.4'%3E%3Cpath d='M9.8 12L0 2.2V.8l10 10 10-10v1.4L10.2 12h-.4zm-4 0L0 6.2V4.8L7.2 12H5.8zm8.4 0L20 6.2V4.8L12.8 12h1.4zM9.8 0l.2.2.2-.2h-.4zm-4 0L10 4.2 14.2 0h-1.4L10 2.8 7.2 0H5.8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");

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

export const Description = styled.div`
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
  width: 100vw;
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
export const Technologies = styled.div``
