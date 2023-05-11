import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { AppProps } from 'next/app'

// Extend the theme to include the Arvo font
const theme = extendTheme({
  fonts: {
    heading: 'Arvo',
    body: 'Arvo',
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp;
