import React, { useState } from "react";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import ErrorNotification from "../../components/errorNotification/errorNotification.jsx";
import style from "../Register/RegisterPage.module.scss";
import { loginUser } from "../../services/login.js";

export default function LoginPage() {
  let navigate = useNavigate();

  const [error, setError] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const formHandler = async (e) => {
    e.preventDefault();
    setError("");
    const result = await loginUser(email, password);

    if (result.accessToken) {
        navigate("/");
    } else {
        setError(result);
    }
};

  return (
    <main>
      {error !== "" ? <ErrorNotification errorMessage={error} /> : <></>}

      <form>
        <h2>Log In</h2>

        <div className={style.inputWrapper}>
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" onChange={emailHandler} />
        </div>

        <div className={style.inputWrapper}>
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" onChange={passwordHandler} />
        </div>

        <button onClick={formHandler}>Sign in</button>

        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </main>
  );
}
