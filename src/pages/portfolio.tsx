import React from 'react'
import Head from 'next/head'
import { NextPage } from 'next'
import { Container, Technologies } from '../styles/pages/Portfolio'
import Technologie from '../components/Technologie'

import { useFetch } from '../hooks/useFetch'

const Portfolio: NextPage = () => {
  const { data } = useFetch('/users/pedroviskov1234/repos')
  return (
    <Container>
      <Head>
        <title>Portfolio</title>
      </Head>
      <Technologies>
        {data &&
          data.map(repos => {
            return (
              <Technologie
                key={repos.id}
                name={repos.name}
                description={repos.description}
                url={repos.html_url}
              />
            )
          })}
      </Technologies>
    </Container>
  )
}

export default Portfolio
