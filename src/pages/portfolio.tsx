import React from 'react'
import Head from 'next/head'
import { NextPage } from 'next'
import NavBar from '../components/NavBar'
import { Container, Technologies } from '../styles/pages/Portfolio'
import Technologie from '../components/Technologie'

import { useFetch } from '../hooks/useFetch'

const Portfolio: NextPage = () => {
  const { data } = useFetch('/repos/pedroviskov1234/frontend-nlw2')

  if (!data) {
    return (
      <Container>
        <Head>
          <title>portfolio</title>
        </Head>
        <NavBar />
        <p>Carregando...</p>
      </Container>
    )
  }

  return (
    <Container>
      <Head>
        <title>portfolio</title>
      </Head>
      <NavBar />
      <Technologies>
        <Technologie name={data.name} description={data.description} />
      </Technologies>
    </Container>
  )
}

export default Portfolio
