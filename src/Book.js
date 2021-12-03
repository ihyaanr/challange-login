import { Box, Heading, Text, Container } from "@chakra-ui/react";
import axios from "axios";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const api = axios.create({
  baseURL: `http://localhost:2222/api/listdata`,
});

const Book = () => {
  return (
    <Box textAlign="center">
      <NavBar />

      <Box w="100%" mt={3} h=""></Box>

      <Heading mt={3}>Book Page</Heading>

      <Container w="100%" h="50vh" flexDir="column">
        <Box>
          <Text fontWeight="bold" font>
            Judul Buku
          </Text>
        </Box>
      </Container>

      <Link to="/transactions">Go To Transactions</Link>
      <br />
      <Link to="/home">Go To Home</Link>
    </Box>
  );
};

export default Book;
