import React, { useState } from "react";
import Link from "next/link";
import {
  Box,
  Flex,
  IconButton,
  Button,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <Flex
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      bg="transparent"
      color="white"
      w="100%"
    >
      <Flex align="center">
        <Link href="/" passHref>
          <Image src="/assets/homepage/logo.png" alt="Logo" boxSize="40px" />
        </Link>
      </Flex>

      {isMobile ? (
        <IconButton
          icon={<HamburgerIcon />}
          variant="outline"
          aria-label="Open Menu"
          size="lg"
          onClick={handleToggle}
          display={{ base: "block", md: "none" }}
        />
      ) : (
        <Box
          display={{ base: "none", md: "flex" }}
          alignItems="center"
          flexGrow={1}
          justifyContent="flex-end"
        >
          {["art", "writing", "coding"].map((item) => (
            <Link href={`/${item}`} key={item} passHref>
              <Button
                variant="outline"
                m={2}
                fontSize={{ base: "22px", md: "24px", lg: "26px" }}
                _hover={{ bg: "whiteAlpha.300" }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Button>
            </Link>
          ))}
        </Box>
      )}

      {isOpen && (
        <Box
          pb={4}
          display={{ md: "none" }}
          w="100%"
          justifyContent="flex-end" // Right-align the items
          flexDirection="column" // Stack them vertically
          alignItems="end" // Align items to the end of the container (right side)
        >
          {["art", "writing", "coding"].map((item) => (
            <Link href={`/${item}`} key={item} passHref>
              <Button
                w="100%"
                justifyContent="flex-end" // Right-align text in the button
                variant="ghost"
                onClick={() => setIsOpen(false)}
                fontSize={{ base: "22px", md: "24px", lg: "26px" }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Button>
            </Link>
          ))}
        </Box>
      )}
    </Flex>
  );
};

export default Navbar;
