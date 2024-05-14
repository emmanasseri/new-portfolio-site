import { Box } from "@chakra-ui/react";
import Image from "next/image";

export default function Commits() {
  return (
    <Box
      width="100vw" // Set width to 100% of the viewport width
      position="relative"
      margin="30px auto"
      overflow="hidden" // Ensures no spillover
      _before={{
        content: '""',
        display: "block",
        paddingTop: "56.25%", // Padding top for 16:9 aspect ratio (100 * 9 / 16)
      }}
    >
      <Image
        src="/assets/homepage/commits_frame.png"
        alt="commits frame"
        layout="fill"
        objectFit="contain"
      />
      <Box
        position="absolute" // Set this to absolute to overlay on the frame image
        top="0" // Start at the top of the parent box
        left="0" // Start at the left of the parent box
        right="0" // Extend to the right of the parent box
        bottom="0" // Extend to the bottom of the parent box
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <img
          src="http://ghchart.rshah.org/409ba5/emmanasseri"
          alt="emmanasseri's Github chart"
          style={{ maxWidth: "200%", maxHeight: "200%" }} // Adjust size accordingly
        />
      </Box>
    </Box>
  );
}
