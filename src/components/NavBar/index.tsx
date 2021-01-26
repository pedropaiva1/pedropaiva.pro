import React from 'react'
import Link from 'next/link'
import { HiMenu } from 'react-icons/hi'

import { Background, Container, MenuDrawer } from './styles'

const NavBar: React.FC = () => {
  return (
    <Background>
      <Container>
        <Link href="/">
          <p>Pedro Paiva</p>
        </Link>

        <HiMenu size={28} color="#fff" />
        <ul>
          <Link href="/contact">
            <li>Contato</li>
          </Link>
          <Link href="/portfolio">
            <li>Portfolio</li>
          </Link>
          <Link href="/blog">
            <li>Blog</li>
          </Link>
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
