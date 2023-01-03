import { Button, Flex, List, ListItem, Stack } from "@chakra-ui/react";
import React from "react";
import { AiFillLinkedin, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const MobileMenu = () => {
  return (
    <Stack px={5} py={5}>
      <List fontSize="40" fontFamily="Bebas Neue">
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
      <List fontFamily="Poppins" fontWiehgt="bold">
        <ListItem cursor="pointer" _hover={{ color: "red.500" }}>
          Careers
        </ListItem>
        <ListItem cursor="pointer" _hover={{ color: "red.500" }}>
          News
        </ListItem>
        <ListItem cursor="pointer" _hover={{ color: "red.500" }}>
          Blog
        </ListItem>
        <ListItem cursor="pointer" _hover={{ color: "red.500" }}>
          About
        </ListItem>
      </List>
      <Stack position="absolute" bottom="28" w="100%" right="0" px="5">
        <Flex alignItems="center" justifyContent="center" gap={3} cursor="pointer" mb={3}>
            <BsFacebook/>
            <AiOutlineInstagram/>
            <AiFillLinkedin/>
            <AiOutlineTwitter/>
        </Flex>
        <Button bg="red.500" color="white" rounded="full" size="sm" _hover={{bg:'black', color:'white'}}>
          Contact
        </Button>
      </Stack>
    </Stack>
  );
};

export default MobileMenu;
