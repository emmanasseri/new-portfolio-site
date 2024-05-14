import { extendTheme, ChakraProvider } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "'CustomFont', sans-serif", // Use your font for headings
    body: "'CustomFont', sans-serif", // Use your font for body text
  },
  styles: {
    global: {
      "@font-face": {
        fontFamily: "CustomFont",
        src: `url('/fonts/CustomFont.otf') format('opentype')`,
        fontColor: "#000000",
      },
      body: {
        bg: "#adb28a",
        fontFamily: "CustomFont",
      },
    },
  },
});

const Chakra = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default Chakra;
