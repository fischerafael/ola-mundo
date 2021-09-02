import { Button, Flex, HStack, Link, Text } from "@chakra-ui/react";

export const Header = () => (
    <Flex
        as="header"
        bg="gray.900"
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
                    ola
                </Text>
                mundo
            </Text>

            <HStack as="nav" spacing="8">
                <Link href="/">Home</Link>
                <Link href="/">Talents</Link>
                <Button size="md" colorScheme="whatsapp">
                    Log In
                </Button>
            </HStack>
        </Flex>
    </Flex>
);
