"use client";

import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Banner from "../components/Entry/Banner";
import Strategy from "../components/Entry/Strategy";
import Talk from "../components/Entry/Talk";
import TrustWorthy from "../components/Entry/TrustWorthy";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <Box>
      <Banner />
      <Strategy />
      <TrustWorthy />
      <Talk />
    </Box>
  );
};

export default Home;
