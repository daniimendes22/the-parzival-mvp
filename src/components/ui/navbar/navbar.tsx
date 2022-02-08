import {
    Box,
    Button,
    chakra, CloseButton, Flex,
    HStack, IconButton,
    useColorModeValue,
    useDisclosure,
    VisuallyHidden, VStack
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import Image from 'next/image'
import Link from 'next/link'

export const Navbar = () => {
    const bg = useColorModeValue("white", "gray.800");
    const mobileNav = useDisclosure();
    return (
        <chakra.header
            bg={bg}
            w="full"
            px={{ base: 2, sm: 4 }}
            py={4}
            shadow="md"
        >
            <Flex alignItems="center" justifyContent="space-between" mx="auto">
                <Flex>
                    <Link href="/">
                        <chakra.a
                            href="/"
                            title="Choc Home Page"
                            display="flex"
                            alignItems="center"
                        >
                            <VisuallyHidden>VINCI</VisuallyHidden>
                            <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
                                <Image src='/images/LOGO.png' width="128" height="64"></Image>
                            </chakra.h1>
                        </chakra.a>
                    </Link>
                </Flex>
                <HStack display="flex" alignItems="center" spacing={1}>
                    <HStack
                        spacing={1}
                        mr={1}
                        color="brand.500"
                        display={{ base: "none", md: "inline-flex" }}
                    >
                        <Button variant="ghost">
                            <Link href="/projects">
                                <a>Projects</a>
                            </Link>
                        </Button>
                        <Button variant="ghost">
                            <Link href="/about">
                                <a>About</a>
                            </Link>
                        </Button>
                        <Button variant="ghost">Discord</Button>

                    </HStack>

                    {/*  {myWeb3 !== undefined ? <button className=" btn-inner - text " onClick={disconnectWallet}> Disconnect </button> : <button className=" btn-inner - text " onClick={connectWallet}> Connect Wallet </button>}
                        */}
                    <Box display={{ base: "inline-flex", md: "none" }}>
                        <IconButton
                            display={{ base: "flex", md: "none" }}
                            aria-label="Open menu"
                            fontSize="20px"
                            color={useColorModeValue("gray.800", "inherit")}
                            variant="ghost"
                            icon={<AiOutlineMenu />}
                            onClick={mobileNav.onOpen}
                        />

                        <VStack
                            pos="absolute"
                            top={0}
                            left={0}
                            right={0}
                            display={mobileNav.isOpen ? "flex" : "none"}
                            flexDirection="column"
                            p={2}
                            pb={4}
                            m={2}
                            bg={bg}
                            spacing={3}
                            rounded="sm"
                            shadow="sm"
                        >
                            <CloseButton
                                aria-label="Close menu"
                                onClick={mobileNav.onClose}
                            />

                            <Button w="full" variant="ghost">
                                Projects
                            </Button>
                            <Button w="full" variant="ghost">
                                Projects
                            </Button>
                            <Button w="full" variant="ghost">
                                Discord
                            </Button>

                        </VStack>
                    </Box>
                </HStack>
            </Flex>
        </chakra.header>
    );
}

