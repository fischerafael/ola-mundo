import { Button, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Header } from "../src/components/organisms";

const index = () => (
    <>
        <Header />

        <VStack
            as="main"
            bg="gray.900"
            minH="85vh"
            align="center"
            color="gray.50"
            spacing="8"
            px="4"
        >
            <VStack
                maxW="container.lg"
                py="8"
                spacing="8"
                w="full"
                justify="center"
            >
                <Text fontSize="6xl" fontWeight="bold">
                    Olá, mundo
                </Text>
                <Text fontSize="xl" maxW="lg" textAlign="center">
                    O ponto de encontro do quem quer trabalhar com tecnologia
                    fora do país
                </Text>
                <Button colorScheme="whatsapp">Criar Conta</Button>
            </VStack>
        </VStack>
    </>
);

export default index;
