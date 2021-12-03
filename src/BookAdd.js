import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Center,
  Button,
} from "@chakra-ui/react";
import { useState } from "react/cjs/react.development";
import NavBar from "./NavBar";
import { useHistory } from "react-router-dom";
import axios from "axios";

const BookAdd = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("Ihya");
  const [isPending, SetIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const book = { title, author };
    console.log("Data: ", book);

    axios
      .post("http://localhost:8000/books", book)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.data);
      });
  };

  return (
    <Box>
      <NavBar />
      <Center mt={5}>
        <Box w="30%">
          <form onSubmit={handleSubmit}>
            <FormControl alignItems="center" id="book">
              <FormLabel htmlFor="title">Book Title</FormLabel>
              <Input
                id="title"
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
              />
              <FormLabel htmlFor="author">Book Author</FormLabel>
              <Input
                id="author"
                placeholder="Author"
                onChange={(e) => setAuthor(e.target.value)}
              />
            </FormControl>
            {!isPending && (
              <Button w="100%" marginTop="2" colorScheme="green" type="submit">
                Save
              </Button>
            )}
            {isPending && (
              <Button
                w="100%"
                marginTop="2"
                isLoading
                loadingText="Loading"
                colorScheme="green"
                variant="outline"
                spinnerPlacement="start"
              ></Button>
            )}
          </form>
        </Box>
      </Center>
    </Box>
  );
};

export default BookAdd;
