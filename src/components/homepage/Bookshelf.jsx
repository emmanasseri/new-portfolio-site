import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function Bookshelf() {
  return (
    <Box
      width="90vw"
      position="relative"
      margin="10px auto"
      overflow="hidden"
      bg={"#f5f5f5"}
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
        overflow="hidden" // Ensures nothing spills outside the container
      >
        <Image
          src="/assets/homepage/lower_shelf.png"
          alt="lower shelf"
          layout="fill"
          objectFit="none" // Override to 'none' to allow repositioning without scaling
          style={{ position: "absolute", bottom: 0 }} // Align image to the bottom
        />
      </Box>
    </Box>
  );
}
