import { Flex, Grid, GridItem } from "@chakra-ui/layout";

export const AppDashboard = () => {
    return (
        <Flex bg="gray.900" w="full" justify="center" color="white">
            <Grid
                maxWidth="1440px"
                w="full"
                gridTemplateColumns="repeat(4, 1fr)"
                minHeight="100vh"
                bg="gray.900"
            >
                <GridItem colSpan={1} bg="gray.900" w="full"></GridItem>
                <GridItem colSpan={3} bg="gray.800" w="full">
                    <Flex height="15vh" w="full">
                        Header
                    </Flex>
                    <Flex height="85vh" w="full" flexDir="column">
                        <Flex bg="red.200" w="full" minHeight="60">
                            oi
                        </Flex>
                        <Flex bg="red.200" w="full" minHeight="60">
                            oi
                        </Flex>
                        <Flex bg="red.200" w="full" minHeight="60">
                            oi
                        </Flex>
                    </Flex>
                </GridItem>
            </Grid>
        </Flex>
    );
};
