import React, { useState } from 'react'
import style from './RegisterPage.module.scss'
import { Link } from 'react-router-dom'
import { registerUser } from '../../services/register';


export default function RegisterPage() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");

    const usernameHandler = (e) => {
        setName(e.target.value);
    }
    const emailHandler = (e) => {
        setEmail(e.target.value);
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value);
    }
    const repeatPasswordHandler = (e) => {
        setRePassword(e.target.value);
    }

    const formHandler = async (e) => {
        e.preventDefault();
        const result = await registerUser(name, email, password, rePassword);
        console.log(result);   
    }

    return (
    <main>

        <form>
            <h2>Register</h2>

            <div className={style.inputWrapper}>
                <label htmlFor="username">Username: </label>
                <input type="text" id="username" onChange={ usernameHandler }/>
            </div>

            <div className={style.inputWrapper}>
                <label htmlFor="email">Email: </label>
                <input type="text" id="email" onChange={ emailHandler }/>
            </div>

            <div className={style.inputWrapper}>
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" onChange={ passwordHandler }/>
            </div>

            <div className={style.inputWrapper}>
                <label htmlFor="re-password">Re-Password: </label>
                <input type="password" id="re-password" onChange={ repeatPasswordHandler }/>
            </div>
            
            <button onClick={ formHandler }>Sign Up</button>

            <p>
                Already have an account? <Link to="/login">Login</Link>
            </p>
        </form>

    </main>
  )
}
