import React from 'react'
import Head from 'next/head'
import { NextPage } from 'next'

import { Container } from '../styles/pages/Home'

const Contact: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Contato</title>
      </Head>
      <p>Contato</p>
    </Container>
  )
}

export default Contact
