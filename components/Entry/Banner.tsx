import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { GoChevronRight } from "react-icons/go";

const Banner = () => {
  return (
    <Box pl={5} mt="24" py={10} w={{ md: "1200px" }} mx="auto">
      <Heading
        fontSize={{ base: "60", sm: "70", md: "80" }}
        fontFamily="Bebas Neue"
        lineHeight="1.1"
      >
        Invest in the digital transformation with confidence
      </Heading>
      <Text
        fontFamily="Poppins"
        my={6}
        maxW={{ base: "420px", sm: "380px" }}
        fontSize={{ base: "15", sm: "17", md: "20" }}
        letterSpacing="-0.04rem"
        color="gray.700"
      >
        Having a clear strategy is the difference between successful digital
        products and those 95% that fail in their first year.
      </Text>
      <Button bg="red.500" color="white" rounded="3xl" px={8}           _hover={{ bg: "black", color: "white" }}
>
        <Flex
          gap={3}
          mt={0.5}
          alignItems="center"
        >
          <Text mb={1}>Explore how</Text> <GoChevronRight />
        </Flex>
      </Button>
    </Box>
  );
};

export default Banner;
