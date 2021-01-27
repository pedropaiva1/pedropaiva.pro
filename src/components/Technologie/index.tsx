import React from 'react'

import { Container } from './styles'

interface TechnolieProps {
  name: string
  description: string
}

const Technologie: React.FC<TechnolieProps> = props => {
  return (
    <Container>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
    </Container>
  )
}

export default Technologie
