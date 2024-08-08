import React, { useEffect, useState } from "react";
import style from "./Header.module.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { getAuth } from "firebase/auth/cordova";

export default function Header() {
    const user = getAuth();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    let location = useLocation();
    let navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("userUid")) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, [location]);

    const logoutHandler = async (e) => {
        e.preventDefault();
        localStorage.clear();
        await user.signOut();
        navigate("/");
    };

    return (
        <header>
            <div className={style.wrapper}>
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>

                <nav>
                    {isLoggedIn ? (
                        <>
                            <Link to="/create">Create</Link>
                            <Link to="/logout" onClick={logoutHandler}>
                                Logout
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link to="/register">Register</Link>
                            <Link to="/login">Login</Link>
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
}
