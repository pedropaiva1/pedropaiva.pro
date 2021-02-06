import React, { useCallback } from 'react'
import Head from 'next/head'
import { NextPage } from 'next'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import { ToastContainer, toast } from 'react-toastify'
import emailjs from 'emailjs-com'
import 'react-toastify/dist/ReactToastify.css'

import { Container, SocialNetworks } from '../styles/pages/Contact'

const Contact: NextPage = () => {
  const onHandleSubmit = useCallback(e => {
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
      toast.dark('📝 Favor preencher todos os campos', {
        position: 'top-right',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        bodyStyle: {
          fontFamily: 'Roboto',
          fontSize: 18,
          color: '#e1e1e6'
        }
      })
      return
    }

    toast.dark('📤 Enviando e-mail...', {
      position: 'top-right',
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      bodyStyle: {
        fontFamily: 'Roboto',
        fontSize: 20,
        color: '#e1e1e6'
      }
    })

    emailjs
      .sendForm(
        'service_rfguz0s',
        'template_t22alea',
        e.target,
        'user_wXfvqOZyvyneNGDHf4gqU '
      )
      .then(
        result => {
          console.log(result.text)
          toast.dark('🚀 E-mail enviado com sucesso!', {
            position: 'top-right',
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            bodyStyle: {
              fontFamily: 'Roboto',
              fontSize: 20,
              color: '#e1e1e6'
            }
          })
        },
        error => {
          console.log(error.text)
          toast.dark('😓 Erro ao enviar o e-mail', {
            position: 'top-right',
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            bodyStyle: {
              fontFamily: 'Roboto',
              fontSize: 20,
              color: '#e1e1e6'
            }
          })
        }
      )
    e.target.reset()
  }, [])

  return (
    <>
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
        <form onSubmit={onHandleSubmit}>
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
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}

export default Contact
