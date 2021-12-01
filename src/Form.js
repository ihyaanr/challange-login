import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Heading, Input } from "@chakra-ui/react";

const Form = ({ setIsAuth, isAuth }) => {
  const eye = <FontAwesomeIcon icon={faEye} />;
  const [passShow, setPassShow] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [value, setValue] = useState("");
  const history = useHistory();

  useEffect(() => {
    if (isAuth) {
      history.push("/home");
    }
  }, [isAuth]);

  const togglePasswordVisiblity = () => {
    setPassShow(passShow ? false : true);
  };

  function handleLogin(e) {
    const body = { username, password };
    e.preventDefault();

    setLoading(true);

    fetch("http://localhost:2223/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => {
        console.log(res);
        // if (!res.ok) {
        //   throw Error('could not fetch the data for that resource');
        // }

        return res.json();
      })
      .then((res) => {
        console.log(res);
        if (res.error) {
          setValue(res.massage);
          setError(res.error);
        } else {
          setIsAuth(true);
        }
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function login() {
    console.warn(username, password);
  }

  return (
    <div className="login">
      {isError ? (
        <p className="value error-color"> {value} </p>
      ) : (
        <p className="value success-color"> {value} </p>
      )}
      <Heading as="h3" size="xl" color="green.600">
        Login
      </Heading>
      <form onSubmit={handleLogin}>
        <label htmlFor="">Username</label>
        <input
          required
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          className={isError ? "border-red" : ""}
        />
        <label htmlFor="">Password</label>
        <div className="pass-wrapper">
          <input
            required
            type={passShow ? "text" : "password"}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className={isError ? "border-red" : ""}
          />
          <i onClick={togglePasswordVisiblity}>{eye}</i>
        </div>
        {!loading && (
          <button onClick={login} disabled={username === "" || password === ""}>
            Login
          </button>
        )}
        {loading && <button onClick={login}>Loading...</button>}
      </form>
    </div>
  );
};

export default Form;
