import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Murquee from "./SubUtils/Murquee";

const TrustWorthy = () => {
  return (
    <Box
      w={{ md: "1200px" }}
      mx="auto"
      borderTop="1px solid gray"
      borderColor="gray.300"
      my={{ base: 20, md: 32 }}
      pt={5}
    >
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        gap={{ md: 5 }}
        alignItems={{ md: "left" }}
        mx={5}
        mt={12}
      >
        <Text fontSize={{ base: "14", sm: "16", md: "17" }} w={{ sm: "80%" }}>
          IN GOOD COMPANY
        </Text>
        <Box my={{ base: 4, md: 0 }}>
          <Heading
            fontSize={{ base: "40", sm: "45", md: "60" }}
            fontWeight="bold"
          >
            Trustworthy
          </Heading>
          <Text
            fontSize={{ base: "13", sm: "15", md: "16" }}
            my={{ base: 1, md: 5 }}
            w={{ md: "50%" }}
            fontFamily="Poppins"
            color="black"
          >
            Everyday, for almost a decade, we're trusted on large framework and
            tech companies and for our brands, design and develop our digital
            products.
          </Text>
        </Box>
      </Flex>
      <Murquee />
    </Box>
  );
};

export default TrustWorthy;
