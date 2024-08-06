import React from 'react'
import style from './RegisterPage.module.scss'
import { Link } from 'react-router-dom'

export default function RegisterPage() {
  return (
    <main>

        <form>
            <h2>Register</h2>

            <div className={style.inputWrapper}>
                <label htmlFor="username">Username: </label>
                <input type="text" id="username" />
            </div>

            <div className={style.inputWrapper}>
                <label htmlFor="email">Email: </label>
                <input type="text" id="email" />
            </div>

            <div className={style.inputWrapper}>
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" />
            </div>

            <div className={style.inputWrapper}>
                <label htmlFor="re-password">Re-Password: </label>
                <input type="password" id="re-password" />
            </div>
            
            <button>Sign Up</button>

            <p>
                Already have an account? <Link to="/login">Login</Link>
            </p>
        </form>

    </main>
  )
}
