import { Box, Heading, Image, Container } from "@chakra-ui/react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box textAlign="center">
      <NavBar />
      <Box>
        <Container maxWidth="container.xl">
          <Box d="flex" alignItems="center" py={20} flexDirection="row">
            <Box mr="6">
              <Heading as="h1" size="xl" isTruncated>
                <Box>HomePage</Box>
              </Heading>
              <Box mt="6" fontWeight="medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae saepe et cumque ipsam! Incidunt fugiat magnam nemo,
                ex quasi aliquid. Nemo, maxime ad. Fugit voluptate tempora
                corporis impedit maxime iure.
              </Box>
            </Box>
            <Box w="100%">
              <Image
                w="100%"
                src="https://sehatnegeriku.kemkes.go.id/wp-content/uploads/2021/05/5150374-scaled.jpg"
                alt="naruto"
                objectFit="cover"
              />
            </Box>
          </Box>
        </Container>
      </Box>

      <Link to="/transactions">Go To Transactions</Link>
      <br />
      <Link to="/Book">Go To Book</Link>
    </Box>
  );
};

export default Home;
