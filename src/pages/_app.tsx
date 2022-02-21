import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from "next/app";
import { theme } from "../styles/theme";
import "../styles/global.css";
import "../styles/style.css";
import Head from 'next/head';
import { SessionProvider } from "next-auth/react"
import {Navbar} from '../components/ui/navbar/navbar';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    return (
        <>
            <Head>
                <title>VINCI</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
                    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                    crossOrigin="anonymous" />
            </Head>
            <ChakraProvider theme={theme}>
                <SessionProvider session={session}>
                    <Navbar />
                    <Component {...pageProps} />
                </SessionProvider>

            </ChakraProvider>
        </>
    )
}

export default MyApp;