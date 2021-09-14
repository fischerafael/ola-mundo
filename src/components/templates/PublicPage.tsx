import { VStack, Text, Button } from "@chakra-ui/react";

export const PublicTemplate = ({ header }) => (
    <>
        {header}

        <VStack
            as="main"
            bg="gray.900"
            minH="85vh"
            align="center"
            justify="center"
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
                <Text
                    fontSize="6xl"
                    fontWeight="bold"
                    maxW="container.sm"
                    textAlign="center"
                    lineHeight="1"
                >
                    Trabalhe remoto com tecnologia
                </Text>

                <Text fontSize="xl" maxW="lg" textAlign="center">
                    Gerencie a sua carreira de desenvolvedor ou designer
                    trabalhando para fora do país
                </Text>
                <Button
                    size="md"
                    bg="pink.500"
                    px="16"
                    py="8"
                    _hover={{ bg: "cyan.500" }}
                >
                    Criar Conta
                </Button>
            </VStack>
        </VStack>
    </>
);
