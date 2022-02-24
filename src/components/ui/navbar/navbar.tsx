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
import { useSession, signIn, signOut } from "next-auth/react"
import Auth from '../auth/auth';
import { useRouter } from "next/router";

export const Navbar = () => {
    const router = useRouter();
    const { data: session } = useSession();
    const bg = useColorModeValue("white", "gray.800");
    const mobileNav = useDisclosure();
    let click = {};

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
                        {session ? (
                            <div>
                                <Button variant="ghost">
                                    <Link href="/projects">
                                        <a>Projects</a>
                                    </Link>
                                </Button>
                            </div>
                        ) : (
                            <></>
                        )}

                        <Button variant="ghost">
                            <Link href="/about">
                                <a>About</a>
                            </Link>
                        </Button>
                        <Button variant="ghost">Discord</Button>

                        <Auth />

                        <Box
                            as='button'
                            p={4}
                            color='white'
                            fontWeight='bold'
                            borderRadius='md'
                            bgGradient='linear(to-r, teal.500, green.500)'
                            _hover={{
                                bgGradient: 'linear(to-r, red.500, yellow.500)',
                            }}
                            onClick={() => router.push("https://lafamiglia.vinci.so/")}
                        >
                            La Famiglia
                        </Box>
                    </HStack>

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

