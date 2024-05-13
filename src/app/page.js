// src/app/page.js

import { Box } from "@chakra-ui/react";
import Layout from "./layout";

function Home() {
  return (
    <Layout>
      <Box
        width="100vw"
        height="calc(100vw * (5760 / 2880))"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bg="#adb28a"
      >
        <Box
          width="80%"
          height="80%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          bg="white"
          borderRadius="md"
          boxShadow="xl"
        >
          <h1>Your Content Here</h1>
        </Box>
      </Box>
    </Layout>
  );
}

export default Home;
