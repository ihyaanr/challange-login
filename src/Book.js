import { Box, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Book = () => {
  return (

    <Box textAlign="center">
      <NavBar />

      <Box w="100%" mt={3} h="">
        
      </Box>

      <Heading mt={3}>Homepage</Heading>
      <Link to="/transactions">Go To Transactions</Link>
      <br />
      <Link to="/home">Go To Home</Link>
    </Box>
  );
};

export default Book;
