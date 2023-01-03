import {
  Box,
  Heading,

  Text,

  Flex,
} from "@chakra-ui/react";
import React from "react";

const Strategy = () => {
  return (
    <Box w={{ md: "1200px" }} pl={5} mx="auto">
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