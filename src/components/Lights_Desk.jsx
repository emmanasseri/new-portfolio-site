import { Box } from "@chakra-ui/react";
import Image from "next/image";

export default function Lights_Desk() {
  return (
    <Box
      width="100vw" // Box width matches the viewport width
      minH="1300px" // Minimum height to ensure the box is sufficiently tall
      height="auto" // Height adjusts to the content
      position="relative" // Needed for Image with layout="fill"
      overflow="hidden" // Prevents content from spilling outside
    >
      <Image
        src="/assets/homepage/desk_and_lights.png"
        alt="Desk and lights"
        layout="fill" // Image will fill the parent Box
        objectFit="contain" // Ensures the entire image fits within the box without cropping
        quality={75} // Optionally reduce quality for better performance
      />
    </Box>
  );
}
