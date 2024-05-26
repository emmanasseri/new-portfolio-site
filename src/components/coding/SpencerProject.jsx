import React from "react";
import { Button, Image, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import TerminalCard from "./TerminalCard";

export default function SpencerProject() {
  return (
    <>
      <Text>Spencer Project</Text>
      <TerminalCard
        label={"Spencer Project"}
        description={"description"}
        href={""}
      />
    </>
  );
}
