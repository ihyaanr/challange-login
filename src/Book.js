import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Button,
  Flex,
  Spacer,
  Icon,
  Center,
} from "@chakra-ui/react";
import axios from "axios";
import { FiTrash2, FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./NavBar";

const Book = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/books").then((res) => setBooks(res.data));
  }, []);

  const handleClick = (id) => {
    if (window.confirm("Are you sure want to delete ?")) {
      axios
        .delete(`http://localhost:8000/books/${id}`)
        .then((response) => {
          console.log(response);
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  // const {data : books} = axios.get("http://localhost:8000/books")

  // axios.get("http://localhost:8000/books").then(function (response) {
  //   console.log(response);
  // });

  return (
    <Box textAlign="center" flexDir="column">
      <NavBar />
      <Center>
        <Box
          w="40%"
          my={5}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
        >
          <Box as="header" my={3} fontWeight="bold">
            Book Page
          </Box>
          <Box as="body">
            <Table variant="simple">
              <TableCaption>Imperial to metric conversion factors</TableCaption>
              <Thead>
                <Tr>
                  <Th>Title</Th>
                  <Th>Author</Th>
                  <Th isNumeric>Actions</Th>
                </Tr>
              </Thead>
              {books &&
                books.map((book, i) => (
                  <Tbody key={i}>
                    <Tr>
                      <Td>{book.title}</Td>
                      <Td>{book.author}</Td>
                      <Td isNumeric>
                        <Link to={book.id}>
                          <Icon as={FiEdit} fontSize="2xl" />
                        </Link>
                        <Link to={book.id}>
                          <Icon
                            onClick={() => handleClick(book.id)}
                            as={FiTrash2}
                            fontSize="2xl"
                          />
                        </Link>
                      </Td>
                    </Tr>
                  </Tbody>
                ))}
            </Table>
          </Box>
        </Box>
      </Center>
      <Spacer />
      <Box>
        <Link to="/addBook">
          <Button colorScheme="green">Add Book</Button>
        </Link>
      </Box>

      <Link to="/transactions">Go To Transactions</Link>
      <br />
      <Link to="/home">Go To Home</Link>
    </Box>
  );
};

export default Book;
