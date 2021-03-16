import React from 'react'
import Head from 'next/head'
import { NextPage } from 'next'

import Image from 'next/image'

import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'

import { Container, SocialNetworks, Description } from '../styles/pages/Home'

import { motion } from 'framer-motion'

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Home | Pedro Paiva</title>
      </Head>

      <Image
        src="/me.jpg"
        alt="Pedro Henrique Martins Paiva"
        height={250}
        width={250}
        quality={100}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.5 }}
      >
        <Description>
          Desenvolvedor de aplicações web com foco em performance e experiência
          de usuário.
        </Description>
      </motion.div>
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

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const data = {}

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {}
  }
}

export default Home
