import React from 'react'
import Head from 'next/head'
import { NextPage } from 'next'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'

import { Container, SocialNetworks } from '../styles/pages/Contact'

import { HiMail } from 'react-icons/hi'

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
            <HiMail size={30} /> <p>pedro.paivahmp@gmail.com</p>
          </a>
          <a href="https://github.com/pedroviskov1234" target="__blank">
            <FaGithub size={30} /> <p>pedroviskov1234</p>
          </a>
          <a
            href="https://www.linkedin.com/in/pedro-martins-b36267205/"
            target="__blank"
          >
            <FaLinkedin size={30} /> <p>Pedro Paiva</p>
          </a>
          <a href="https://www.facebook.com/pedroxotaf/" target="__blank">
            <FaFacebook size={30} /> <p>Pedro Henrique</p>
          </a>
        </SocialNetworks>
      </section>
      <form>
        <h1>Entre em contato</h1>
        <input placeholder="Nome" id="name"></input>
        <input placeholder="Email" id="email"></input>
        <input placeholder="Assunto" id="subject"></input>
        <textarea placeholder="Descrição" id="description"></textarea>
        <button type="submit">Enviar</button>
      </form>
    </Container>
  )
}

export default Contact
