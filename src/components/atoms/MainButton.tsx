import { Button, ButtonProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props extends ButtonProps {
    children: ReactNode;
}

export const MainButton = ({ children, ...props }: Props) => (
    <Button size="md" bg="cyan.500" _hover={{ bg: "pink.500" }} {...props}>
        {children}
    </Button>
);
