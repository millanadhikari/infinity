"use client";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { CgMathEqual } from "react-icons/cg";
import { GrFormClose } from "react-icons/gr";
import MobileMenu from "./Entry/SubUtils/MobileMenu";

const Navbar = () => {
  const [clicked, setClicked] = useState<boolean>(false);
  return (
    <Box position="fixed" zIndex="999" bg="white" w="100%">
      {!clicked && (
        <Box
          position="fixed"
          h="100vh"
          overflow="hidden"
          top="0"
          bg="white"
          mt="20"
          __css={{
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
          left="0"
          right="0"
        >
          <MobileMenu clicked={clicked} />
        </Box>
      )}
      <Flex
        alignItems="center"
        maxW={{ md: "1200px" }}
        mx={{ base: 0, md: "auto" }}
        justifyContent="space-between"
        px={4}
        py={4}
      >
        <Image src="/logo.jpg" pt={1.7} />
        <Flex gap={7}>
          <Flex
            gap={8}
            alignItems="center"
            fontSize="14"
            display={{ base: "none", md: "flex" }}
            color={{ sm: !clicked ? "white" : "black" }}
            fontFamily="Poppins"
          >
            <Text cursor="pointer" _hover={{ color: "red.500" }}>
              Services
            </Text>
            <Text cursor="pointer" _hover={{ color: "red.500" }}>
              Industries
            </Text>
            <Text cursor="pointer" _hover={{ color: "red.500" }}>
              Work
            </Text>
            <Text cursor="pointer" _hover={{ color: "red.500" }}>
              About
            </Text>
            <Text cursor="pointer" _hover={{ color: "red.500" }}>
              Careers
            </Text>
            <Text cursor="pointer" _hover={{ color: "red.500" }}>
              Blog
            </Text>
            <Button
              bg="red.500"
              color="white"
              rounded="3xl"
              _hover={{ bg: "black" }}
              px={6}
            >
              Contact
            </Button>
          </Flex>

          <Box
            bg="gray.100"
            fontSize="27"
            color="gray.700"
            p={2}
            zIndex="999"
            rounded="full"
            cursor="pointer"
            onClick={() => setClicked(!clicked)}
          >
            {clicked ? <CgMathEqual /> : <GrFormClose />}
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
