"use client";
import { VStack } from "@chakra-ui/react";
import RootLayout from "./layout";
import Chakra from "./chakra";

import Signature_PFP from "@/components/Signature_PFP";
import Lamp_Frame from "@/components/Lamp_Frame";
import Bookshelf_Commits from "@/components/Bookshelf_Commits";
import Lights_Desk from "@/components/Lights_Desk";

function Home() {
  return (
    <RootLayout>
      <Chakra>
        <VStack
          width="100vw"
          height="100vh"
          spacing={0}
          align="stretch"
          justifyContent="flex-start"
          overflow="auto"
        >
          <Signature_PFP />
          <Lamp_Frame />
          <Bookshelf_Commits />
          <Lights_Desk />
        </VStack>
      </Chakra>
    </RootLayout>
  );
}

export default Home;
