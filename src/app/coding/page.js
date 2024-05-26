"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { Box, VStack, Text } from "@chakra-ui/react";
import FolderButton from "@/components/coding/FolderButton";
import RootLayout from "../layout";
import Chakra from "../chakra";
import Footer from "@/components/Footer";
import Desktop from "@/components/coding/Desktop";
import TerminalCard from "@/components/coding/TerminalCard";
import Projects from "@/components/coding/Projects";

export default function CSPage() {
  const projects = [
    { label: "Blockchain Research", href: "#spencerSection" },
    { label: "Listart", href: "#listartSection" },
    { label: "KBF", href: "#kbfSection" },
    { label: "dApp Tutorial", href: "#dAppTutorialSection" },
    // Add more folders as needed
  ];

  return (
    <>
      <RootLayout>
        <Chakra>
          <Navbar />
          <Box>
            <Text>My digital work</Text>
            <Desktop folders={projects} />
          </Box>
          <Projects />
          <Footer />
        </Chakra>
      </RootLayout>
    </>
  );
}
