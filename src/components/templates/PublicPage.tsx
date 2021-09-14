import { VStack } from "@chakra-ui/react";
import { ReactElement } from "react";

interface Props {
    header: ReactElement;
    main: ReactElement;
}

export const PublicTemplate = ({ header, main }: Props) => (
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
            {main}
        </VStack>
    </>
);
