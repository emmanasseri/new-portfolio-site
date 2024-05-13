"use client";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#adb28a",
      },
    },
  },
});

const Chakra = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default Chakra;
