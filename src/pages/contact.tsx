import React from 'react'
import Head from 'next/head'
import { NextPage } from 'next'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

import emailjs from 'emailjs-com'

import { Container, SocialNetworks } from '../styles/pages/Contact'

const Contact: NextPage = () => {
  function sendEmail(e) {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_rfguz0s',
        'template_t22alea',
        e.target,
        'user_wXfvqOZyvyneNGDHf4gqU'
      )
      .then(
        result => {
          console.log(result.text)
        },
        error => {
          console.log(error.text)
        }
      )
    e.target.reset()
  }

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
      <form onSubmit={sendEmail}>
        <h1>Entre em contato</h1>
        <input placeholder="Nome" id="name" name="name"></input>
        <input placeholder="Email" id="email" name="email"></input>
        <input placeholder="Assunto" id="subject" name="subject"></input>
        <textarea
          placeholder="Descrição"
          id="description"
          name="message"
        ></textarea>
        <button type="submit">Enviar</button>
      </form>
    </Container>
  )
}

export default Contact
