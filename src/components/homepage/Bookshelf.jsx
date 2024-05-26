import { Box } from "@chakra-ui/react";
import Image from "next/image";

export default function Bookshelf() {
  return (
    <Box
      flex={1} // Allow the box to grow as needed
      position="relative"
      margin="300px 10px 10px 10px" // Increase bottom margin to push the component lower
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
        overflow="hidden"
      >
        <Image
          src="/assets/homepage/lower_shelf.png"
          alt="lower shelf"
          layout="fill"
          objectFit="contain" // Changed to 'contain' to prevent excessive cropping
          style={{ position: "absolute", bottom: 0 }}
        />
      </Box>
    </Box>
  );
}
