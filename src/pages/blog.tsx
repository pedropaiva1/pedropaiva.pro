import React from 'react'
import Head from 'next/head'
import { NextPage } from 'next'
import NavBar from '../components/NavBar'

import Link from 'next/link'

import { Container } from '../styles/pages/Home'

const Blog: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Blog</title>
      </Head>
      <p>Blog</p>
    </Container>
  )
}

export default Blog
