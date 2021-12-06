import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Input,
  Center,
  Text,
  Button,
  Box,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import axios from "axios";

const Form = ({ setIsAuth, isAuth }) => {
  const eye = <FontAwesomeIcon icon={faEye} />;
  const [passShow, setPassShow] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [value, setValue] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate("/home");
    }
  }, [isAuth, navigate]);

  const togglePasswordVisiblity = () => {
    setPassShow(passShow ? false : true);
  };

  function handleLogin(e) {
    const body = { username, password };
    e.preventDefault();

    setLoading(true);

    axios
      .post("http://localhost:2222/api/login", body)
      .then((response) => {
        console.log(response.data);
        setIsAuth(true);
        navigate("/home");
      })
      .catch((e) => {
        console.log(e.response.data);
        setValue(e.response.data.massage);
        setError(e.response.data.error);
      })
      .finally(() => {
        setLoading(false);
      });

    // fetch("http://localhost:2222/api/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(body),
    // })
    //   .then((res) => {
    //     console.log(res);
    //     // if (!res.ok) {
    //     //   throw Error('could not fetch the data for that resource');
    //     // }

    //     return res.json();
    //   })
    //   .then((res) => {
    //     console.log(res);
    //     if (res.error) {
    //       setValue(res.massage);
    //       setError(res.error);
    //     } else {
    //       setIsAuth(true);
    //     }
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });
  }

  return (
    <Center minH="50vh">
      <Box m={2} maxW="350px" w="100%">
        {isError ? (
          <Text fontSize="md" color="red">
            {value}
          </Text>
        ) : (
          <Text fontSize="md" color="green">
            {value}
          </Text>
        )}
        <Text
          fontWeight="bold"
          fontSize="4xl"
          textAlign="center"
          color="green.600"
        >
          Login
        </Text>
        <form onSubmit={handleLogin}>
          <FormControl marginTop="2" isInvalid={isError}>
            <FormLabel>Username</FormLabel>
            <Input
              pos="relative"
              type="text"
              name="username"
              placeholder="Masukan Username"
              errorBorderColor="red.300"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormControl>

          <FormControl marginTop="2" isInvalid={isError}>
            <FormLabel>Password</FormLabel>
            <Input
              type={passShow ? "text" : "password"}
              name="password"
              placeholder="Masukan Password"
              errorBorderColor="red.300"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i onClick={togglePasswordVisiblity}>{eye}</i>
          </FormControl>

          {!loading && (
            <Button
              w="100%"
              marginTop="2"
              colorScheme="green"
              type="submit"
              disabled={username === "" || password === ""}
            >
              Login
            </Button>
          )}
          {loading && (
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
  );
};

export default Form;
