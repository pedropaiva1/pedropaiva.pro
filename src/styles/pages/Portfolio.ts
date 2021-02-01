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
`
export const Technologies = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  h1 {
    padding-bottom: 10px;
  }
`

export const Curriculum = styled.div`
  display: flex;
  width: 100%;
  justify-content: start;
  flex-direction: column;
  text-align: center;
  h1:first-child {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  h1 {
    margin-top: 20px;
  }

  p {
    font-weight: 400;
    margin-top: 5px;
  }

  @media (max-width: 700px) {
    p {
      text-align: start;
      margin: 10px 10px;
    }
  }
`
