import React from 'react'
import { motion } from 'framer-motion'

import { Container } from './styles'

interface TechnolieProps {
  name: string
  description: string
  url: string
}

const Technologie: React.FC<TechnolieProps> = props => {
  return (
    <Container>
      <motion.div
        className="box"
        whileHover={{
          position: 'relative',
          scale: 1.05,
          backgroundColor: '#282a36',
          transition: {
            duration: 0.1
          }
        }}
      >
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <div>
          <a href={props.url}>Documentação →</a>
        </div>
      </motion.div>
    </Container>
  )
}

export default Technologie
