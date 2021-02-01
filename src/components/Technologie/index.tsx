import React from 'react'

import { Container } from './styles'

interface TechnolieProps {
  name: string
  description: string
  url: string
}

const Technologie: React.FC<TechnolieProps> = props => {
  return (
    <Container>
      <div className="box">
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <div>
          <a href={props.url}>Documentação →</a>
        </div>
      </div>
    </Container>
  )
}

export default Technologie
