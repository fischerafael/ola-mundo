import { VStack, Text, Button, useDisclosure } from "@chakra-ui/react";
import { PublicTemplate } from "../components/templates/PublicPage";
import { Header } from "../components/organisms";
import { CustomModal } from "../components/organisms/CustomModal";
import { useEffect } from "react";

export const PagePublicHome = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        fetch("http://localhost:3000/api/users")
            .then((res) => res.json())
            .then((data) => console.log(data));
    }, []);
    return (
        <>
            <PublicTemplate
                header={<Header />}
                main={
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

                        <Text maxW="lg" textAlign="center">
                            Gerencie a sua carreira de desenvolvedor ou designer
                            trabalhando para fora do país
                        </Text>
                        <Button
                            size="md"
                            bg="cyan.500"
                            px="16"
                            py="8"
                            _hover={{ bg: "pink.500" }}
                            onClick={onOpen}
                        >
                            Criar Conta
                        </Button>
                    </VStack>
                }
            />
            <CustomModal isOpen={isOpen} onClose={onClose}>
                <Button bg="cyan.500">Cadastrar com Google</Button>
            </CustomModal>
        </>
    );
};
