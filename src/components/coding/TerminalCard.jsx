import React from "react";
import { Button, Image, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";

const TerminalCard = ({ label, description, href }) => {
  return (
    <Link href={href} passHref>
      <Button variant="unstyled" _focus={{ outline: "none" }}>
        <VStack spacing={2}>
          <Image
            src="/assets/coding/blank_terminal.png"
            alt="Terminal Window"
            boxSize="300px"
          />
          <Text color="white" fontSize="lg">
            {label}
          </Text>
        </VStack>
      </Button>
    </Link>
  );
};

export default TerminalCard;
