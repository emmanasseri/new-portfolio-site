"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import RootLayout from "../layout";
import Chakra from "../chakra";
import Footer from "@/components/Footer";

export default function CSPage() {
  return (
    <>
      <RootLayout>
        <Chakra>
          <Navbar />
          about
          <Footer />
        </Chakra>
      </RootLayout>
    </>
  );
}
