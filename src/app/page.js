"use client";
import { VStack, ChakraProvider } from "@chakra-ui/react";
import RootLayout from "./layout";

import Signature_PFP from "@/components/Signature_PFP";
import Lamp_Frame from "@/components/Lamp_Frame";
import Bookshelf_Commits from "@/components/Bookshelf_Commits";
import Lights_Desk from "@/components/Lights_Desk";

function Home() {
  return (
    <RootLayout>
      <ChakraProvider>
        <VStack
          width="100vw"
          height="100vh"
          spacing={0}
          align="stretch"
          justifyContent="flex-start"
          //bg="#adb28a"
        >
          <Signature_PFP />
          <Lamp_Frame />
          <Bookshelf_Commits />
          <Lights_Desk />
        </VStack>
      </ChakraProvider>
    </RootLayout>
  );
}

export default Home;
