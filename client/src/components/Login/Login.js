import React, { useState } from "react";
import "./Login.scss";
import { useHistory } from "react-router-dom";
import { auth } from "../../firebase";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__form-container">
        <h1 className="login__form-header">Sign-in</h1>
        <form className="login__form">
          <h3 className="login__form-label">E-mail</h3>
          <input
            className="login__form-input"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h3 className="login__form-label">Password</h3>
          <input
            className="login__form-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" onClick={signIn} className="login__btn-signin">
            Sign-In
          </button>
        </form>
        <h3>New To Fusion?</h3>
        <button onClick={register} className="login__btn-register">
          Click to Register
        </button>
      </div>
    </div>
  );
};

export default Login;
