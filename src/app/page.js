"use client";
import { Box, HStack } from "@chakra-ui/react";
import RootLayout from "./layout";
import Signature_PFP from "@/components/Signature_PFP";
import { ChakraProvider } from "@chakra-ui/react";

function Home() {
  return (
    <RootLayout>
      <ChakraProvider>
        <Box
          width="100vw"
          height="calc(100vw * (5760 / 2880))"
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="center"
          bg="#adb28a"
        >
          <Signature_PFP />
        </Box>
      </ChakraProvider>
    </RootLayout>
  );
}

export default Home;
