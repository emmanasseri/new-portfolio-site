import { Box, HStack, Spacer, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function Lamp_Frame() {
  return (
    <HStack
      spacing={0} // Eliminate any default spacing
      width="100%"
      align="stretch"
      borderRadius="md"
    >
      <Box width="300px" position="relative">
        <Image
          src="/assets/homepage/top_shelf.png"
          alt="top shelf"
          layout="responsive"
          width={300} // Explicit width matching the box width
          height={500} // Height adjusted to maintain desired aspect ratio
          objectFit="contain"
        />
      </Box>
      <Spacer />
      <Box width="60%" position="relative" margin={15} height="auto">
        <Image
          src="/assets/homepage/big_frame.png"
          alt="big frame"
          layout="fill" // Use 'fill' to ensure it covers the entire Box area
          objectFit="contain"
        />
        <Box
          position="absolute"
          top="20%"
          left="15%"
          right="15%"
          bottom="20%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          textAlign={"center"}
        >
          <Text fontSize="4xl" color="black" fontWeight="bold">
            Welcome to my portfolio site! This page is designed to look like the
            work area in my apartment, where I created this site and so many
            other projects featured here. Scroll down to see my bookshelf, art
            projects, software development, and more. Or click here to learn
            more about me.
          </Text>
        </Box>
      </Box>
    </HStack>
  );
}
