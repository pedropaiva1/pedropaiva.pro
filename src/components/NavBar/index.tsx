import React from 'react'
import { HiMenu } from 'react-icons/hi'

import { Background, Container, MenuDrawer } from './styles'

const NavBar: React.FC = () => {
  return (
    <Background>
      <Container>
        <p>Pedro Paiva</p>
        <HiMenu size={28} color="#fff" />
        <ul>
          <li>Contato</li>
          <li>Portfolio</li>
          <li>Blog</li>
        </ul>
      </Container>
      <MenuDrawer>
        <ul>
          <li>Contato</li>
          <li>Portfolio</li>
          <li>Blog</li>
        </ul>
      </MenuDrawer>
    </Background>
  )
}

export default NavBar
