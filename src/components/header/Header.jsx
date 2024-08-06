import React from 'react'
import style from "./Header.module.scss"
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

export default function Header() {
  return (
    <header>
        <div className={style.wrapper}>
            
            <Link to="/">
                <img src={logo} alt="Logo" />
            </Link>
            
            <nav>
                <Link to="/register" className={style.register}>Register</Link>
                <Link to="/login" className={style.login}>Login</Link>
            </nav>
        </div>

    </header>
  )
}
