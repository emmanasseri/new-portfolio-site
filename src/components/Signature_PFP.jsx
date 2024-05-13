import { Box, HStack, Spacer } from "@chakra-ui/react";
import Image from "next/image";

export default function Signature_PFP() {
  return (
    <HStack
      spacing={0} // Eliminate any default spacing
      width="100%"
      align="stretch"
      borderRadius="md"
    >
      <Box width="40%" position="relative" margin={20}>
        <Image
          src="/assets/homepage/signature.png"
          alt="signature"
          layout="responsive"
          width={150} // Explicit width matching the box width
          height={400} // Height adjusted to maintain desired aspect ratio
          objectFit="contain"
        />
      </Box>
      <Spacer />
      <Box
        width="150px"
        position="relative"
        overflow="hidden"
        borderRadius="50%"
        margin={20}
      >
        <Image
          src="/assets/homepage/headshot.jpeg"
          alt="headshot"
          layout="responsive"
          width={150} // Width that approximates the Box's percentage
          height={150} // Ensure the width and height are the same for a perfect circle
          objectFit="cover" // Change to 'cover' to ensure the image fills the circle
        />
      </Box>
    </HStack>
  );
}
