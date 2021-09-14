import { Flex, HStack, Link, Text } from "@chakra-ui/react";
import { MainButton } from "../../atoms/MainButton";

export const Header = () => (
    <Flex
        as="header"
        bg="gray.800"
        h="15vh"
        align="center"
        justify="center"
        color="gray.50"
        px="4"
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
                    olá
                </Text>
                mundo
            </Text>

            <HStack as="nav" spacing="8">
                <Link href="/">Home</Link>

                <MainButton>Entrar</MainButton>
            </HStack>
        </Flex>
    </Flex>
);
