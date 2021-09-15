import { ChakraProvider } from "@chakra-ui/react";
import { makeServer } from "../src/services/mirage";

if (process.env.NODE_ENV === "development") {
    makeServer();
}

export default function App({ Component, pageProps }) {
    return (
        <ChakraProvider>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}
