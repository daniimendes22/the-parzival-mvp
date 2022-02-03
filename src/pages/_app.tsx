import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from "next/app";
import { theme } from "../styles/theme";
import Head from 'next/head'
import Navbar from "../components/ui/navbar";
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    return (
        <>
            <Head>
                <title>Next and MDX Blog</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
                    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                    crossOrigin="anonymous" />
            </Head>
            <ChakraProvider theme={theme}>
                <Navbar />
                <SessionProvider session={session}>
                    <Component {...pageProps} />
                </SessionProvider>

            </ChakraProvider>
        </>
    )
}

export default MyApp;