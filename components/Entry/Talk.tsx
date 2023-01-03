import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

const Talk = () => {
  return (
    <Box mt={36} textAlign={{ sm: "center" }}>
      <Box mx={{ base: 5 }}>
        <Heading fontSize="34">Got a project?</Heading>
        <Button
          _hover={{ bg: "black" }}
          rounded="full"
          bg="red.500"
          fontSize="13"
          color="white"
          px="6"
          py={4}
          my={6}
        >
          <Flex alignItems="center" gap={2} justifyContent="center">
            Let's talk <BsArrowRightShort size="1.3em" />
          </Flex>
        </Button>
      </Box>
      <Box mt={12} w={{ md: "1200px" }} mx="auto">
        <Image
          objectPosition="none"
          objectFit="fill"
          src="https://wp-assets.infinum.com/uploads/2022/03/img-home-sectionbreak.jpg"
        />
      </Box>
    </Box>
  );
};

export default Talk;
