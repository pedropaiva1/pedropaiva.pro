import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import NavBar from '../components/NavBar'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
