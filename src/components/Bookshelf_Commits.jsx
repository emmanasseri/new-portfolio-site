import { Box, HStack } from "@chakra-ui/react";
import Image from "next/image";

export default function Bookshelf_Commits() {
  return (
    <HStack
      spacing={4}
      width="100%"
      height="auto"
      align="stretch"
      borderRadius="md"
    >
      <Box width="50%" position="relative">
        <Image
          src="/assets/homepage/lower_shelf.png"
          alt="lower shelf"
          layout="responsive"
          width={200} // These would be adjusted to maintain the aspect ratio
          height={500}
          objectFit="contain"
        />
      </Box>
      <Box width="50%" position="relative">
        <Image
          src="/assets/homepage/commits_frame.png"
          alt="commits frame"
          layout="responsive"
          width={200} // These would be adjusted to maintain the aspect ratio
          height={100}
          objectFit="contain"
        />
      </Box>
    </HStack>
  );
}
