import React from "react";
import { Box, Image, Text, Grid } from "@chakra-ui/react";
import FolderButton from "./FolderButton";
import Projects from "./Projects";

const Desktop = ({ folders }) => {
  return (
    <Box m={5} position="relative">
      <Image
        src="/assets/coding/desktop_pic.png"
        alt="Desktop Picture"
        w="full"
      />
      <Grid
        templateColumns="repeat(auto-fill, minmax(120px, 1fr))"
        gap={6}
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        p={5}
        alignItems="start"
      >
        {folders.map((folder) => (
          <FolderButton
            key={folder.label}
            label={folder.label}
            href={folder.href}
          />
        ))}
      </Grid>
      <Text
        color="white"
        fontSize="2xl"
        position="absolute"
        bottom={5}
        left={5}
      >
        my computer
      </Text>

    </Box>
  );
};

export default Desktop;
