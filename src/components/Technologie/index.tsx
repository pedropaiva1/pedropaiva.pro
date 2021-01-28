import React from 'react'

import { Container } from './styles'

interface TechnolieProps {
  name: string
  description: string
  url: string
}

const Technologie: React.FC<TechnolieProps> = props => {
  return (
    <Container href={props.url} target="__blank">
      <h1>{props.name}</h1>
      <p>{props.description}</p>
    </Container>
  )
}

export default Technologie
