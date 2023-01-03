import {
  Box,
  Button,
  Flex,
  Image,
  List,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import {
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import Underline from "./Underline";

const MobileMenu = ({ clicked }) => {
  return (
    <Stack
      px={5}
      py={5}
      maxW={{ md: "1200px" }}
      mx={{ base: 0, md: "auto" }}
      flexDir={{ md: "flex" }}
    >
      <Box>
        <List fontSize="44" mb={2} fontFamily="Bebas Neue">
          <ListItem cursor="pointer" _hover={{ color: "red.500" }}>
            Services
          </ListItem>
          <ListItem cursor="pointer" _hover={{ color: "red.500" }}>
            Industries
          </ListItem>
          <ListItem cursor="pointer" _hover={{ color: "red.500" }}>
            Work
          </ListItem>
        </List>
        <List fontFamily="Poppins" fontWiehgt="semibold">
          <ListItem mb={1} cursor="pointer" _hover={{ color: "red.500" }}>
            Careers
          </ListItem>
          <ListItem mb={1} cursor="pointer" _hover={{ color: "red.500" }}>
            News
          </ListItem>
          <ListItem mb={1} cursor="pointer" _hover={{ color: "red.500" }}>
            Blog
          </ListItem>
          <ListItem mb={1} cursor="pointer" _hover={{ color: "red.500" }}>
            About
          </ListItem>
        </List>
        <Stack
          position="absolute"
          maxW={{ md: "1200px" }}
          mx={{ base: 0, md: "auto" }}
          bottom="28"
          w="100%"
          px="5"
        >
          <Flex
            alignItems="center"
            justifyContent={{ base: "center", lg: "left" }}
            gap={3}
            cursor="pointer"
            fontSize={20}
            mb={6}
          >
            <BsFacebook />
            <AiOutlineInstagram />
            <AiFillLinkedin />
            <AiOutlineTwitter />
            <Underline/>
          </Flex>
          <Button
            bg="red.500"
            color="white"
            rounded="full"
            size="md"
            _hover={{ bg: "black", color: "white" }}
            display={{ md: "none" }}
          >
            Contact
          </Button>
        </Stack>
      </Box>
      <Box
        position="fixed"
        display={{ base: "none", lg: "inline" }}
        top={-10}
        right="0"
        left="40%"
      >
        <Image
          src="https://wp-assets.infinum.com/uploads/2022/03/img-drawer.jpg"
          objectFit="contain"
        />
      </Box>
    </Stack>
  );
};

export default MobileMenu;
