import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import React from "react";
import HoverSlideText from "../animations/HoverSlideText";

const Strategy = () => {
  return (
    <Box w={{ md: "1200px" }} pl={5} mx="auto">
      <Text>WE SHIP WHAT WE PROMISE</Text>
      <Heading
        fontFamily="Poppins"
        maxW={{ md: "600px" }}
        fontSize={{ base: "20", sm: "24", md: "28" }}
        lineHeight="1.5"
        my={10}
      >
        With nearly 12 years of collective knowledge, we use merging
        technologies to solve problems and shape the behaviours of tomorrow.
      </Heading>
      <Flex
        flexDirection="column"
        gap={{ sm: 4, md: 6 }}
        textAlign={{ base: "left"}}
        ml={{md:"50%"}}
      >
        <Box cursor="pointer" my={2}>
          <Text fontSize="12">01</Text>
          <Heading
            fontFamily="Bebas Neue"
            fontSize={{ base: "42", sm: "52", md: "62" }}
          >
            Strategy
          </Heading>
        </Box>
        <Box cursor="pointer" my={2}>
          <Text fontSize="12">02</Text>
          <Heading
            fontFamily="Bebas Neue"
            fontSize={{ base: "42", sm: "52", md: "62" }}
          >
            Design
          </Heading>
        </Box>
        <Box cursor="pointer" my={2}>
          <Text fontSize="12">03</Text>
          <Heading
            fontFamily="Bebas Neue"
            fontSize={{ base: "42", sm: "52", md: "62" }}
          >
            Engineering
          </Heading>
        </Box>
        <Box cursor="pointer" my={2}>
          <Text fontSize="12">04</Text>
          <Heading
            fontFamily="Bebas Neue"
            fontSize={{ base: "42", sm: "52", md: "62" }}
          >
            Data
          </Heading>
        </Box>
      </Flex>
      {/* <HoverSlideText/> */}
    </Box>
  );
};

export default Strategy;
