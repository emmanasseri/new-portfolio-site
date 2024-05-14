import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function About_Frame() {
  return (
    <Box
      width="90vw"
      position="relative"
      margin="10px auto"
      overflow="hidden"
      _before={{
        content: '""',
        display: "block",
        paddingTop: "56.25%", // Maintains a 16:9 aspect ratio
      }}
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Image
          src="/assets/homepage/big_frame.png"
          alt="big frame"
          layout="fill"
          objectFit="contain"
        />
        <Box
          position="absolute"
          top="20%"
          left="20%"
          right="20%"
          bottom="20%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          <Text fontSize={["xl", "2xl", "4xl"]} color="black" fontWeight="bold">
            Welcome to my digital portfolio! The design of this page was
            inspired by the work area in my apartment, where I created this site
            and many other projects featured here. Scroll down to see my
            bookshelf, art projects, software development, and more. Or click
            here to learn more about me.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
