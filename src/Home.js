import {
  Box,
  Heading,
  Image,
  Container,
  Flex,
  Icon,
  Text,
  Avatar,
} from "@chakra-ui/react";
import { FiHome, FiBook, FiDollarSign } from "react-icons/fi";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Flex h="100vh" flexDir="row" overflow="hidden" maxW="2000px">
      {/* Column 1 */}
      <Flex
        w="15%"
        flexDir="column"
        alignItems="center"
        backgroundColor="black"
        color="#020202"
      >
        <Flex flexDir="column" justifyContent="space-between" h="100vh">
          <Flex flexDir="column" as="nav">
            <Heading
              color="green"
              mt={50}
              mb={85}
              fontSize="4xl"
              alignSelf="center"
              letterSpacing="tight"
            >
              Challange.
            </Heading>
            <Flex flexDir="column" align="flex-start" justifyContent="center">
              <Flex className="sidebar-item">
                <Link to="/book">
                  <Flex>
                    <Icon as={FiHome} fontSize="2xl" className="active-icon" />
                    <Text to="" className="active">
                      Home
                    </Text>
                  </Flex>
                </Link>
              </Flex>
              <Flex className="sidebar-item">
                <Link to="/book">
                  <Flex>
                    <Icon as={FiBook} fontSize="2xl" />
                    <Text>Book</Text>
                  </Flex>
                </Link>
              </Flex>
              <Flex className="sidebar-item">
                <Link to="/transactions">
                  <Flex>
                    <Icon as={FiDollarSign} fontSize="2xl" />
                    <Text>Transactions</Text>
                  </Flex>
                </Link>
              </Flex>
            </Flex>
          </Flex>
          <Flex flexDir="column" alignItems="center" mb={10} mt={5}>
            <Avatar my={4} src="killua.jpg" />
            <Text color="white" textAlign="center">
              Geviant
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex w="55%" p="3%" flexDir="column" overflow="auto" minH="100vh">
        <Heading fontWeight="normal" mb={4}>
          Welcome back,{" "}
          <Flex fontWeight="bold" display="inline-flex">
            Geviant
          </Flex>
        </Heading>
        {/* <Chart /> */}
      </Flex>
      <Flex
        w="35%"
        bgColor="#F5F5F5"
        p="3%"
        flexDir="column"
        overflow="auto"
      ></Flex>
    </Flex>
  );
};

export default Home;
