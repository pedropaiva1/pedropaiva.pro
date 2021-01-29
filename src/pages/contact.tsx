import React from 'react'
import Head from 'next/head'
import { NextPage } from 'next'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'

import { Container, SocialNetworks } from '../styles/pages/Contact'

const Contact: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Contato</title>
      </Head>
      <section>
        <Image
          src="/me.jpg"
          alt="Pedro Henrique Martins Paiva"
          height={200}
          width={200}
          quality={100}
        />
        <SocialNetworks>
          <a href="">
            <FaGithub size={35} /> Pedro Paiva
          </a>
          <a href="">
            <FaLinkedin size={35} /> Pedro Paiva
          </a>
          <a href="">
            <FaFacebook size={35} /> Pedro Paiva
          </a>
        </SocialNetworks>
      </section>
      <form>
        <input></input>
        <input></input>
        <input></input>
        <textarea></textarea>
      </form>
    </Container>
  )
}

export default Contact
