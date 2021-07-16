import React from 'react'
import Head from 'next/head'
import { NextPage } from 'next'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import toast, { Toaster } from 'react-hot-toast';
import emailjs from 'emailjs-com'
import 'react-toastify/dist/ReactToastify.css'

import { Container, SocialNetworks } from '../styles/pages/Contact'

const Contact: NextPage = () => {

  async function sendEmail(e){
    await toast.promise(
      emailjs
      .sendForm(
        `${process.env.SERVICE_ID}`,
        `${process.env.TEMPLATE_ID}`,
        e.target,
        `${process.env.USER_ID}`
      ),
      {
        loading: 'Enviando email...',
        success: <b>E-mail enviado com sucesso!</b>,
        error: <b>Erro ao enviar o e-mail</b>
      }
    )
    
  }

  function handleSendEmail(e) {
    e.preventDefault()

    const inputs = document.getElementsByTagName('input')
    const description = document.getElementsByTagName('textarea')[0].value

    const formData = {
      name: inputs[0].value,
      email: inputs[1].value,
      subject: inputs[2].value,
      description
    }

    if (
      formData.name === '' ||
      formData.email === '' ||
      formData.subject === '' ||
      formData.description === ''
    ) {
      toast('📋 Preencha todos os campos!')
      return
    }

    sendEmail(e)
    
    e.target.reset()
  }

  return (
    <>
      <Container>
        <Head>
          <script
            type="text/javascript"
            src="https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js"
          ></script>
          <script type="text/javascript">
            (function() {emailjs.init(`${process.env.USER_ID}`)})()
          </script>
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
            <a>
              <HiMail size={30} /> <p>pedro.paivahmp@gmail.com</p>
            </a>
            <a href="https://github.com/pedropaiva1" target="__blank">
              <FaGithub size={30} /> <p>pedropaiva1</p>
            </a>
            <a
              href="https://www.linkedin.com/in/pedro-paiva-b36267205/"
              target="__blank"
            >
              <FaLinkedin size={30} /> <p>Pedro Paiva</p>
            </a>
            <a href="https://www.facebook.com/pedroxotaf/" target="__blank">
              <FaFacebook size={30} /> <p>Pedro Henrique</p>
            </a>
          </SocialNetworks>
        </section>
        <form onSubmit={handleSendEmail}>
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
      <Toaster
        toastOptions={{
          className: '',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        }}
      />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {}
  }
}

export default Contact
