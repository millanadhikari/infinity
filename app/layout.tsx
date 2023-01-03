"use client";

import { ChakraProvider, Flex } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { Inter } from "@next/font/google";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ChakraProvider>
          <Flex flexDirection="column" >
            <Navbar />
            {children}
            <Footer />
          </Flex>
        </ChakraProvider>
      </body>
    </html>
  );
}
