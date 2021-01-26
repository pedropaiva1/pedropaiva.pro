import React from 'react'
import Head from 'next/head'
import { NextPage } from 'next'
import NavBar from '../components/NavBar'

import Link from 'next/link'

import { Container } from '../styles/pages/Home'

const Portfolio: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>portfolio</title>
      </Head>
      <NavBar />
      <p>portfolio</p>
    </Container>
  )
}

export default Portfolio
