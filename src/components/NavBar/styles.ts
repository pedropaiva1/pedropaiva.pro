import styled from 'styled-components'

export const Background = styled.div`
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  background-color: #282a36;
  width: 100vw;
  -webkit-box-shadow: 15px -16px 98px 3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 15px -16px 98px 3px rgba(0, 0, 0, 0.75);
  box-shadow: 15px -16px 98px 3px rgba(0, 0, 0, 0.75);
`

export const Container = styled.div`
  width: 80vw;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;

  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
  }

  p {
    font-size: 35px;
  }

  li {
    font-size: 35px;
    margin-left: 25px;
  }

  > svg {
    display: none;
  }

  @media (max-width: 750px) {
    > svg {
      display: block;
    }

    ul {
      display: none;
    }
  }
`
export const MenuDrawer = styled.div`
  position: absolute;
  display: none;

  @media (max-width: 750px) {
    display: none;
  }
`
