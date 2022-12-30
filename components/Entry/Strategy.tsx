import {
  Box,
  Heading,
  Slide,
  Text,
  PseudoBox,
  textDecoration,
  useColorMode,
  Button,
  Flex,
} from "@chakra-ui/react";
import { Animate } from "@chakra-ui/core";
import React from "react";

const Strategy = () => {
  return (
    <Box mx={5} my={10}>
      <Text>WE SHIP WHAT WE PROMISE</Text>
      <Heading
        fontFamily="Poppins"
        maxW={{ md: "600px" }}
        fontSize="24"
        my={10}
      >
        With nearly 12 years of collective knowledge, we use merging
        technologies to solve problems and shape the behaviours of tomorrow.
      </Heading>
      <Flex flexDirection='column' gap={{sm:4, md:6}} textAlign={{base:'left', sm:'center'}}>
        <Box cursor="pointer" my={2}>
          <Text fontSize="12">01</Text>
          <Heading fontFamily="Bebas Neue" fontSize="40">Strategy</Heading>
        </Box>
        <Box cursor="pointer" my={2}>
        <Text fontSize="12">02</Text>
          <Heading fontFamily="Bebas Neue" fontSize="40">Design</Heading>
        </Box>
        <Box cursor="pointer" my={2}>
        <Text fontSize="12">03</Text>
          <Heading fontFamily="Bebas Neue" fontSize="40">Engineering</Heading>
        </Box>
        <Box cursor="pointer" my={2}>
        <Text fontSize="12">04</Text>
          <Heading fontFamily="Bebas Neue" fontSize="40">Data</Heading>
        </Box>
      </Flex>
    </Box>
  );
};

export default Strategy;

function MyLink() {
  return (
    <Box>
      <Button
        colorScheme="teal"
        _hover={{
          background: "white",
          color: "teal.500",
        }}
      >
        Hover me
      </Button>
      <Box role="group">
        <Box
          _hover={{
            fontWeight: "semibold",
            borderBottom: "2px solid currentColor",
          }}
          _groupHover={{ color: "tomato" }}
        ></Box>
      </Box>
      <Box _before={{ content: '"🙂"', display: "inline-block", mr: "5px" }}>
        A pseudo element
      </Box>
    </Box>
  );
}
