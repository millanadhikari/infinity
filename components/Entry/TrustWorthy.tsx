import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Murquee from "./SubUtils/Murquee";

const TrustWorthy = () => {
  return (
    <Box>
      <Flex
        flexDirection={{ base: "column", sm: "row" }}
        gap={{ md: 5 }}
        alignItems={{ md: "left" }}
        mx={5}
        mt={12}
      >
        <Text fontSize="13" w={{ sm: "80%" }}>
          IN GOOD COMPANY
        </Text>
        <Box my={{ base: 4, md: 0 }}>
          <Heading
            fontSize={{ base: "38", sm: "45", md: "60" }}
            fontWeight="bold"
          >
            Trustworthy
          </Heading>
          <Text
            fontSize="13"
            my={{ base: 1, md: 5 }}
            w={{ md: "50%" }}
            fontFamily="Poppins"
            color="black"
          >
            Everyday, for almost a decade, we're trusted on large framework and tech companies and for our brands, design and develop our digital products.
          </Text>
        </Box>
      </Flex>
     <Murquee/>
    </Box>
  );
};

export default TrustWorthy;
