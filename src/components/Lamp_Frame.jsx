import { Box, HStack, Spacer } from "@chakra-ui/react";
import Image from "next/image";

export default function Lamp_Frame() {
  return (
    <HStack
      spacing={0} // Eliminate any default spacing
      width="100%"
      align="stretch"
      borderRadius="md"
    >
      <Box width="200" position="relative">
        <Image
          src="/assets/homepage/top_shelf.png"
          alt="top shelf"
          layout="responsive"
          width={200} // Explicit width matching the box width
          height={400} // Height adjusted to maintain desired aspect ratio
          objectFit="contain"
        />
      </Box>
      <Spacer />
      <Box width="60%" position="relative" margin={15}>
        <Image
          src="/assets/homepage/big_frame.png"
          alt="big frame"
          layout="responsive"
          width={400} // Width that approximates the Box's percentage
          height={100} // Height to maintain a proportionate aspect ratio
          objectFit="contain"
        />
      </Box>
    </HStack>
  );
}
