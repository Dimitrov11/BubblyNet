import React, { useState } from "react";
import style from "./RegisterPage.module.scss";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import { registerUser } from "../../services/register";
import ErrorNotification from "../../components/errorNotification/errorNotification.jsx";

export default function RegisterPage() {
    let navigate = useNavigate();

    const [error, setError] = useState("");

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");

    const usernameHandler = (e) => {
        setName(e.target.value);
    };
    const emailHandler = (e) => {
        setEmail(e.target.value);
    };
    const passwordHandler = (e) => {
        setPassword(e.target.value);
    };
    const repeatPasswordHandler = (e) => {
        setRePassword(e.target.value);
    };

    const formHandler = async (e) => {
        e.preventDefault();
        setError("");
        const result = await registerUser(name, email, password, rePassword);

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
                <h2>Register</h2>

                <div className={style.inputWrapper}>
                    <label htmlFor="username">Username: </label>
                    <input type="text" id="username" onChange={usernameHandler} />
                </div>

                <div className={style.inputWrapper}>
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email" onChange={emailHandler} />
                </div>

                <div className={style.inputWrapper}>
                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" onChange={passwordHandler} />
                </div>

                <div className={style.inputWrapper}>
                    <label htmlFor="re-password">Re-Password: </label>
                    <input
                        type="password"
                        id="re-password"
                        onChange={repeatPasswordHandler}
                    />
                </div>

                <button onClick={formHandler}>Sign Up</button>

                <p>
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </form>
        </main>
    );
}
