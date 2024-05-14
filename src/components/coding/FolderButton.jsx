import React from "react";
import { Button, Image, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";

const FolderButton = ({ label, href }) => {
  return (
    <Link href={href} passHref>
      <Button variant="unstyled" _focus={{ outline: "none" }}>
        <VStack spacing={2}>
          <Image
            src="/assets/coding/folder_icon.png"
            alt="Folder Icon"
            boxSize="80px"
          />
          <Text color="white" fontSize="lg">
            {label}
          </Text>
        </VStack>
      </Button>
    </Link>
  );
};

export default FolderButton;
