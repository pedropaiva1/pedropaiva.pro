import React from 'react'
import Head from 'next/head'
import { NextPage } from 'next'

import Navbar from '../components/NavBar'
import Image from 'next/image'

import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'

import { Container, SocialNetworks, Description } from '../styles/pages/Home'

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>
      <Navbar />
      <Image
        src="/me.jpg"
        alt="Pedro Henrique Martins Paiva"
        height={250}
        width={250}
        quality={100}
        className="photo"
      />
      <p>Fullstack Developer</p>
      <Description>
        Desenvolvedor de aplicações web com foco em performance e experiência de
        usuário.
      </Description>
      <SocialNetworks>
        <a
          target="__blank"
          href="https://www.linkedin.com/in/pedro-martins-b36267205/"
        >
          <FaLinkedin size={40} />
        </a>
        <a target="__blank" href="https://www.facebook.com/pedroxotaf/">
          <FaFacebook size={40} />
        </a>
        <a target="__blank" href="https://github.com/pedroviskov1234">
          <FaGithub size={40} />
        </a>
      </SocialNetworks>
    </Container>
  )
}

export default Home
