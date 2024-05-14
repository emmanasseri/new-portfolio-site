"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { Box, Text } from "@chakra-ui/react";
import FolderButton from "@/components/coding/FolderButton";
import RootLayout from "../layout";
import Chakra from "../chakra";
import Footer from "@/components/Footer";
import Desktop from "@/components/coding/Desktop";

export default function CSPage() {
  const folders = [
    { label: "Go to Documents", href: "#documentsSection" },
    { label: "Projects", href: "#projectsSection" },
    { label: "Music", href: "#musicSection" },
    // Add more folders as needed
  ];

  <Desktop folders={folders} />;

  return (
    <>
      <RootLayout>
        <Chakra>
          <Navbar />
          <Box>
            <Desktop folders={folders} />
          </Box>
          <Footer />
        </Chakra>
      </RootLayout>
    </>
  );
}
