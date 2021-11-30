import { Box, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Transactions = () => {
  return (
    <Box textAlign="center">
      <NavBar />
      <Heading mt={3}>Transactions</Heading>
      <Link to="/home">Go To Home</Link>
      <br />
      <Link to="/Book">Go To Book</Link>
    </Box>
  );
};

export default Transactions;
