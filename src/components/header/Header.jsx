import React, { useEffect, useState } from 'react'
import style from "./Header.module.scss"
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { getAuth } from "firebase/auth/cordova";

export default function Header() {
  const user = getAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  let location = useNavigate();

  useEffect(() => {
    if (user.currentUser) {
      setIsLoggedIn(user.currentUser.uid == localStorage.getItem('userUid'));
    }
  }, [location]);

  return (
    <header>
        <div className={style.wrapper}>
            
            <Link to="/">
                <img src={logo} alt="Logo" />
            </Link>
            
            <nav>

                {isLoggedIn ? 
                <>
                <Link to="/logout" className={style.logout}>Logout</Link>
                </> 
                : 
                <><Link to="/register" className={style.register}>Register</Link>
                <Link to="/login" className={style.login}>Login</Link></>
                }
            </nav>
        </div>

    </header>
  )
}
