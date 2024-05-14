"use client";
import RootLayout from "./layout";
import Chakra from "./chakra";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Homepage from "@/components/homepage/Homepage";

function Home() {
  return (
    <RootLayout>
      <Chakra>
        <Navbar />
        <Homepage />
        <Footer />
      </Chakra>
    </RootLayout>
  );
}

export default Home;
