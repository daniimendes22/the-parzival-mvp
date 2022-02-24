import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from "next/app";
import { theme } from "../styles/theme";
import Head from 'next/head'
import { useEffect, useState } from "react";
import Header from "../components/ui/navbar/header";
import Footer from "../components/ui/footer/footer";
import { SessionProvider } from "next-auth/react"
import "../styles/style.css"

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);

    // This function will scroll the window to the top 
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // for smoothly scrolling
        });
    };

    return (
        <>

            <Head>
                <title>Vinci</title>
            </Head>
            <ChakraProvider theme={theme}>
                <SessionProvider session={session}>

                    <div className="container">
                        <Header></Header>
                        <Component {...pageProps} />
                        <Footer></Footer>
                    </div>
                </SessionProvider>

            </ChakraProvider>
            {showButton && (
                <button onClick={scrollToTop} className="back-to-top">
                    &#8679;
                </button>
            )}
            <style jsx>
                {`
                    .container {
                        width: 100%;
                        display: flex;
                        overflow: auto;
                        min-height: 100vh;
                        align-items: center;
                        flex-direction: column;
                    }`
                }
            </style>
        </>
    )
}

export default MyApp;