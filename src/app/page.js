"use client";
import { VStack } from "@chakra-ui/react";
import RootLayout from "./layout";
import Chakra from "./chakra";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Signature_PFP from "@/components/Signature_PFP";
import Commits from "@/components/Commits";
import Lights_Desk from "@/components/Lights_Desk";
import Bookshelf from "@/components/Bookshelf";
import About_Frame from "@/components/About_Frame";

function Home() {
  return (
    <RootLayout>
      <Chakra>
        <Navbar />
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
        <Footer />
      </Chakra>
    </RootLayout>
  );
}

export default Home;
