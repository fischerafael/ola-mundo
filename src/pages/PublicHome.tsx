import { useState } from "react";
import axios from "axios";
import {
    VStack,
    Text,
    Button,
    useDisclosure,
    Input,
    FormControl,
    FormLabel,
} from "@chakra-ui/react";

import { PublicTemplate } from "../components/templates/PublicPage";
import { Header } from "../components/organisms";
import { CustomModal } from "../components/organisms/CustomModal";

export const PagePublicHome = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [isLoading, setLoading] = useState(false);

    const [registerData, setRegisterData] = useState({
        name: "",
        email: "",
        password: "",
    });

    console.log("REGISTER DATA", registerData);

    const handleChange = (e: any) =>
        setRegisterData({ ...registerData, [e.target.id]: e.target.value });

    const handleRegister = () => {
        setLoading(true);
        axios
            .post("http://localhost:3000/api/auth", registerData)
            .then((res) => console.log(res.data))
            .catch((e) => console.log(e))
            .finally(() => setLoading(false));
    };

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
                <VStack spacing="4">
                    <FormControl>
                        <FormLabel>Nome</FormLabel>
                        <Input
                            value={registerData.name}
                            id="name"
                            type="text"
                            onChange={handleChange}
                        />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input
                            id="email"
                            type="email"
                            value={registerData.email}
                            onChange={handleChange}
                        />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Senha</FormLabel>
                        <Input
                            id="password"
                            type="password"
                            value={registerData.password}
                            onChange={handleChange}
                        />
                    </FormControl>

                    <Button
                        isLoading={isLoading}
                        onClick={handleRegister}
                        bg="cyan.500"
                    >
                        Cadastrar
                    </Button>
                </VStack>
            </CustomModal>
        </>
    );
};
