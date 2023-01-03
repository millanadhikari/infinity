import {
  Box,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
// import {ChevronRightIcon} from "@chakra-ui/icons"
import { AiOutlineArrowRight } from "react-icons/ai";
import React from "react";

const Footer = () => {
  return (
    <Box bg="blue.50" pt={{ base: 10, md: 4 }} pb={5} >
      <Box w={{ md: "1200px" }} mx="auto">
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
        px={5}
        gap={{ md: 40 }}
      >
        <Box w={{ md: "40%" }}>
          <Heading fontSize="24" mr={{ base: 20, md: 0 }}>
            Tech news you'll actually want to read.
          </Heading>
          <InputGroup mt={8}>
            <Input
              variant="flushed"
              placeholder="Your email *"
              _placeholder={{ fontSize: "13" }}
              fontSize="13"
            />
            <InputRightElement
              children={<AiOutlineArrowRight size="0.9rem" />}
            />
          </InputGroup>
        </Box>
        <Flex fontSize="15" justifyContent="start" w="100%" mt={10} gap={20}>
          <Box>
            <Text mb={4}>INFINITY</Text>
            <List spacing={1.5} fontSize="12" fontFamily="Poppins">
              <ListItem cursor="pointer">Work</ListItem>
              <ListItem cursor="pointer">Industries</ListItem>
              <ListItem cursor="pointer">Services</ListItem>
              <ListItem cursor="pointer">Blog</ListItem>
              <ListItem cursor="pointer">About</ListItem>
              <ListItem cursor="pointer">Careers</ListItem>
              <ListItem cursor="pointer">Contact</ListItem>
            </List>
          </Box>

          <Box>
            <Text mb={4}>MORE</Text>
            <List spacing={1.5} fontSize="12" fontFamily="Poppins">
              <ListItem cursor="pointer">Facebook</ListItem>
              <ListItem cursor="pointer">Instagram</ListItem>
              <ListItem cursor="pointer">Twitter</ListItem>
              <ListItem cursor="pointer">Clutch</ListItem>
              <ListItem cursor="pointer">Dribble</ListItem>
              <ListItem cursor="pointer">Linkedln</ListItem>
            </List>
          </Box>
        </Flex>
      </Flex>
      <Flex
        my={6}
        alignItems="center"
        justifyContent="space-between"
        borderTop="1px solid gray"
        borderColor="gray.400"
        pt={6}
        mx={5}
      >
        <Image
          src="https://pngimg.com/uploads/infinity_symbol/infinity_symblo_PNG46.png"
          h={5}
          w={9}
          pt={1.7}
        />

        <Flex fontSize="12" gap={3}>
          <Text cursor="pointer">LEGAL</Text>
          <Text>|</Text>
          <Text cursor="pointer">Privacy Policy</Text>
        </Flex>
      </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
