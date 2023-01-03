"use client";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { CgMathEqual } from "react-icons/cg";
import { GrFormClose } from "react-icons/gr";
import MobileMenu from "./Entry/SubUtils/MobileMenu";

const Navbar = () => {
  const [clicked, setClicked] = useState<boolean>(true);
  const [show, handleShow] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 20) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);
  return (
    <Box
      position="fixed"
      zIndex="999"
      bg={(!show || !clicked && "white")}
      w="100%"
    >
      {!clicked && (
        <Box
          position="fixed"
          h="100vh"
          overflow="hidden"
          top="0"
          bg="white"
          mt="70px"
          __css={{
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
          left="0"
          right="0"
        >
          <MobileMenu />
        </Box>
      )}
      <Flex
        alignItems="center"
        maxW={{ md: "1200px" }}
        mx={{ base: 0, md: "auto" }}
        justifyContent={!show ? "space-between" : "right"}
        px={4}
        py={4}
      >
        <Flex alignItems="center" gap={4} display={show ? "none" : "flex"}>
          <Image
            src="https://pngimg.com/uploads/infinity_symbol/infinity_symblo_PNG46.png"
            w="14"
            pt={1.7}
          />
          <Heading fontFamily="Poppins" fontSize="26">Infinity </Heading>
        </Flex>
        <Flex gap={7}>
          <Flex
            gap={8}
            alignItems="center"
            fontSize="14"
            display={{ base: "none", md: show ? "none" : "flex" }}
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
              size="sm"
              rounded="3xl"
              py={6}
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
