import { VStack, Flex, useBreakpointValue } from "@chakra-ui/react";

import Signature_PFP from "@/components/homepage/Signature_PFP";
import Lights_Desk from "@/components/homepage/Lights_Desk";
import Bookshelf from "@/components/homepage/Bookshelf";
import About_Frame from "@/components/homepage/About_Frame";
import Commits from "@/components/homepage/Commits";

function Homepage() {
  const direction = useBreakpointValue({ base: "column", md: "row" });

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
      <Flex
        direction={direction}
        width="100vw"
        align="stretch"
        justify="space-around"
      >
        <Bookshelf />
        <Commits />
      </Flex>
      <Lights_Desk />
    </VStack>
  );
}

export default Homepage;
