import React from 'react'
import Head from 'next/head'
import { NextPage } from 'next'
import Link from 'next/link'
import NavBar from '../components/NavBar'

import { Container } from '../styles/pages/Home'

const Contact: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Contato</title>
      </Head>
      <NavBar />
      <p>Contato</p>
    </Container>
  )
}

export default Contact
