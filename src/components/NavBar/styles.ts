import styled from 'styled-components'

export const Background = styled.div`
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  background-color: #282a36;
  width: 100%;
  -webkit-box-shadow: 15px -16px 98px 3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 15px -16px 98px 3px rgba(0, 0, 0, 0.75);
  box-shadow: 15px -16px 98px 3px rgba(0, 0, 0, 0.75);
  z-index: 100;

  .nav-menu {
    background-color: #282a36;
    width: 250px;
    height: 100%;
    display: flex;
    justify-content: center;
    position: fixed;
    right: -100%;
    transition: all 0.4s ease;
    z-index: 10;
  }

  .nav-menu.active {
    right: 0;
    z-index: 10;
  }

  .nav-text {
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 8px 0px 8px 16px;
    list-style: none;
    height: 60px;
    border-bottom: 1px solid #50fa7b;
    cursor: pointer;
  }

  .nav-text p {
    text-decoration: none;
    color: #e1e1e6;
    font-size: 18px;
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 16px;
  }

  .nav-menu-items {
    width: 100%;
  }

  .navbar-toggle {
    background-color: #282a36;
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
  }

  a > p {
    margin-left: 10px;
  }

  @media (max-width: 750px) {
    div:first-child {
      display: flex;
      margin: 0;
      width: 100%;
    }

    div > p {
      margin-left: 20px;
    }

    div > svg {
      margin-right: 20px;
    }
  }
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
    font-family: 'Lobster', cursive;
    font-weight: 500;
    font-size: 30px;
    transition: all 0.2s linear;
    color: #8be9fd;
  }

  p > b {
    color: #8be9fd;
  }

  p:hover {
    cursor: pointer;
    color: #8be9fd;
    border-color: #8be9fd;
  }

  li {
    font-size: 25px;
    margin-left: 25px;
    transition: ease-in-out 0.3s;
    border-bottom: 2px solid transparent;
  }

  li:hover {
    cursor: pointer;
    color: #8be9fd;
    border-color: #8be9fd;
    border-bottom: 2px solid #8be9fd;
  }

  path {
    color: #8be9fd;
    border-bottom: 2px solid #8be9fd;
  }

  > svg {
    display: none;
  }

  @media (max-width: 750px) {
    > svg {
      display: block;
      cursor: pointer;
    }

    ul {
      display: none;
    }
  }
`
