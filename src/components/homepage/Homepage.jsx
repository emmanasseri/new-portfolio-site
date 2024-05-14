"use client";
import { VStack } from "@chakra-ui/react";

import Signature_PFP from "@/components/homepage/Signature_PFP";
import Commits from "@/components/homepage/Commits";
import Lights_Desk from "@/components/homepage/Lights_Desk";
import Bookshelf from "@/components/homepage/Bookshelf";
import About_Frame from "@/components/homepage/About_Frame";

function Homepage() {
  return (
    <VStack
      width="100vw"
      spacing={2}
      align="stretch"
      justifyContent="flex-start"
      overflow="auto"
    >
      <Signature_PFP />
      <About_Frame />
      <Commits />
      <Bookshelf />
      <Lights_Desk />
    </VStack>
  );
}

export default Homepage;
