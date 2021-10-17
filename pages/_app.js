import Main from '../components/layouts/main'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../libs/theme'
import Fonts from '../components/Fonts'

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Main router={router}>
        <Component {...pageProps} key={router.route} />
      </Main>
    </ChakraProvider>
  )
}

export default Website
