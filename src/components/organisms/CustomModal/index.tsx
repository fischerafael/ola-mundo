import { Text } from "@chakra-ui/layout";
import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
} from "@chakra-ui/modal";

export const CustomModal = ({ isOpen, onClose, children }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent bg="gray.900" color="white" p="8">
                <ModalHeader fontSize="sm">Criar Conta</ModalHeader>
                <ModalCloseButton />
                <ModalBody display="flex" flexDir="column" w="full">
                    {children}
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};
