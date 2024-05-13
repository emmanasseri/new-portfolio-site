import { Box } from "@chakra-ui/react";
import Image from "next/image";

export default function Lights_Desk() {
  return (
    <Box width="100%" height="auto" position="relative">
      <Image
        src="/assets/homepage/desk_and_lights.png"
        alt="Desk and lights"
        layout="fill"
        objectFit="contain"
      />
    </Box>
  );
}
