import { Box, HStack } from "@chakra-ui/react";

import Image from "next/image";

export default function Signature_PFP() {
  return (
    <HStack
      spacing={4}
      width="80%"
      height="80%"
      display="flex"
      borderRadius="md"
    >
      <Box width="60%" position="relative" height="100%">
        <Image
          src="/assets/homepage/signature.png"
          alt="signature"
          layout="fill"
          objectFit="contain"
        />
      </Box>
      <Box width="40%" position="relative" height="100%">
        <Image
          src="/assets/homepage/headshot.jpeg"
          alt="headshot"
          layout="fill"
          objectFit="contain"
        />
      </Box>
    </HStack>
  );
}
