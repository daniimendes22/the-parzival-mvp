import {
    Box,
    Button,
    chakra, CloseButton, Flex,
    HStack, IconButton,
    Link,
    Stack,
    useColorModeValue,
    useDisclosure,
    VisuallyHidden, VStack
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { useEffect, useState } from "react";
import wallet_model from '../../../pages/models/wallet_model';


export const Navbar = () => {
    const { web3Loading, getweb3 } = wallet_model();
    const [myWeb3, setMyWeb3] = useState();
    async function connectWallet() {
        await getweb3().then((response) => {
            setMyWeb3(response);
            response.eth.getAccounts().then(async (result) => (
                await fetch('/api/dbSaveUserWalletAPI', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(result[0]),
                })
            ));
        });
    };
    async function disconnectWallet() {
        setMyWeb3(undefined); console.log("result")
    };
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
                    <chakra.a
                        href="/"
                        title="Choc Home Page"
                        display="flex"
                        alignItems="center"
                    >

                        <VisuallyHidden>Logo</VisuallyHidden>
                    </chakra.a>
                    <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
                        Logo
                    </chakra.h1>
                </Flex>
                <HStack display="flex" alignItems="center" spacing={1}>
                    <HStack
                        spacing={1}
                        mr={1}
                        color="brand.500"
                        display={{ base: "none", md: "inline-flex" }}
                    >
                        <Button variant="ghost">About</Button>
                        <Button variant="ghost">Discord</Button>

                    </HStack>

                    {myWeb3 !== undefined ? <button className=" btn-inner - text " onClick={disconnectWallet}> Disconnect </button> : <button className=" btn-inner - text " onClick={connectWallet}> Connect Wallet </button>}

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
                                About
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

