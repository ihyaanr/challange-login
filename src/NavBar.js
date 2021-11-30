import { Box, Heading, Button } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

const NavBar = () => {
  const history = useHistory();

  return (
    <Box
      d="flex"
      alignItems="center"
      justifyContent="space-between"
      p={6}
      background="gray.200"
      color="green.600"
    >
      <Box>
        <Heading as="h5" size="md" alt="brand">
          Challange
        </Heading>
      </Box>
      {/* <Box>
        <Button
          onClick={() => history.push("/")}
          color="black"
          colorScheme="red"
          p={3}
          fontSize="md"
          variant="solid"
        >
          Logout
        </Button>
      </Box> */}
    </Box>
  );
};

export default NavBar;
