import { Box, HStack, Spacer } from "@chakra-ui/react";
import Image from "next/image";

export default function Bookshelf() {
  return (
    <Box width="500px" position="relative">
      <Image
        src="/assets/homepage/lower_shelf.png"
        alt="lower shelf"
        layout="responsive"
        width={500}
        height={500}
        objectFit="contain"
      />
    </Box>
  );
}
