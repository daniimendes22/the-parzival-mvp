import {ChakraProvider} from '@chakra-ui/react'
import {AppProps} from "next/app";
import {theme} from "../styles/theme";
import Navbar from "../components/ui/navbar";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Navbar  />
            <Component {...pageProps} />

        </ChakraProvider>
    )
}

export default MyApp;