import { Box } from "@chakra-ui/react";
import Image from "next/image";

export default function Commits() {
  return (
    <Box
      flex={1} // Allow the box to grow as needed
      position="relative"
      margin="10px 10px 200px 10px" // Increase top margin to push the component higher
      overflow="hidden"
      _before={{
        content: '""',
        display: "block",
        paddingTop: "56.25%",
      }}
    >
      <Image
        src="/assets/homepage/commits_frame.png"
        alt="commits frame"
        layout="fill"
        objectFit="contain"
      />
      <Box
        position="absolute"
        display="flex"
        justifyContent="center"
        alignItems="center"
        inset="0"
      >
        <img
          src="http://ghchart.rshah.org/409ba5/emmanasseri"
          alt="emmanasseri's Github chart"
          style={{ maxWidth: "80%", maxHeight: "200%" }}
        />
      </Box>
    </Box>
  );
}
