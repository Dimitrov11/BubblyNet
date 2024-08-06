import React from "react";
import style from '../Register/RegisterPage.module.scss'
import { Link } from 'react-router-dom'

export default function LoginPage() {
  return (
    <main>
      <form>
        <h2>Log In</h2>

        <div className={style.inputWrapper}>
          <label htmlFor="username">Username: </label>
          <input type="text" id="username" />
        </div>

        <div className={style.inputWrapper}>
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" />
        </div>

        <button>Sign in</button>

        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </main>
  );
}
