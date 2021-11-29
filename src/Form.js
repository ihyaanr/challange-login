import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons"
import { useDebugValue, useState } from "react";

const Form = () => {

    const eye = <FontAwesomeIcon icon={faEye}/>;
    const [passShow, setPassShow] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [isError, setError] = useState(false);
    const [value, setValue] = useState("");

    const togglePasswordVisiblity = () => {
        setPassShow(passShow ? false : true);
      };
    

      function handleLogin(e) {
          const body = {username, password}
          e.preventDefault()

          setLoading(true);

          fetch('http://localhost:2223/api/login', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(body)
          }).then((res) => {
              console.log(res)
                if (!res.ok) {
                  throw Error('could not fetch the data for that resource');
                }

                return res.json();
          }).then(res => {
              console.log(res)
              setValue(res.massage)
              setError(false);
              setLoading(false);
          }).catch(e => {
              console.log(e)
              setValue('Login gagal')
              setError(true)
              setLoading(false)
          })
      }

    function login(){
        console.warn(username, password)
    }

    return ( 
        <div className="login">
            {isError ? <p className="value error-color"> {value} </p> : <p className="value success-color"> {value} </p>}
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <label htmlFor="">Username</label>
                <input required type="text" placeholder="Username" 
                onChange={(e) => setUsername(e.target.value)}/>
                <label htmlFor="">Password</label>
                <div className="pass-wrapper">
                <input required type={passShow ? "text" : "password"} placeholder="Password" 
                onChange={(e) => setPassword(e.target.value)}/>
                <i onClick={togglePasswordVisiblity}>{eye}</i>
                </div>
                { !loading && <button onClick={login}>Login</button>}
                { loading && <button onClick={login}>Loading...</button> }
            </form>
        </div>
     );
}
    
export default Form;