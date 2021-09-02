import { Button, Flex, HStack, Link, Text } from "@chakra-ui/react";
import React from "react";

const index = () => (
    <>
        <Flex
            as="header"
            bg="gray.900"
            h="15vh"
            align="center"
            justify="center"
            color="gray.50"
        >
            <Flex
                maxW="container.lg"
                h="full"
                w="full"
                maxWidth="container.lg"
                align="center"
                justify="space-between"
            >
                <Text fontSize="lg">
                    <Text as="span" fontWeight="bold">
                        ola
                    </Text>
                    mundo
                </Text>

                <HStack as="nav" spacing="8">
                    <Link href="/">Home</Link>
                    <Link href="/">Perfis</Link>
                    <Button size="md" colorScheme="whatsapp">
                        Log In
                    </Button>
                </HStack>
            </Flex>
        </Flex>

        <Flex as="main" bg="gray.900" h="85vh" justify="center" color="gray.50">
            body
        </Flex>
    </>
);

export default index;
