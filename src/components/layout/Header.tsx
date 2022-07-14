import React, {SyntheticEvent} from "react";
import {Search} from "../Search/Search";
import {Link, useNavigate} from "react-router-dom";

import "./Header.css"

export const Header = () => {

    const navigate = useNavigate();
    const logout = async (e:SyntheticEvent) => {
        e.preventDefault();
        await fetch("http://localhost:3001/user/logout", {
            method: "DELETE",
        });
        navigate('/');
    }
    return (

        <header className="header">
            <nav className="nav">
                <ul className="menu">
                    <Link to="/" className="logo" >My-Library</Link>
                    {/*<Link to="/admin" className="item" >Admin</Link>*/}
                    <Link to="/admin/register" className="item">Register</Link>
                    <Link to="/admin/login" className="item">Login</Link>
                    <button  className="item logout-button" onClick={logout}>Logout</button>
                </ul>
            </nav>
            <Search/>

        </header>
    )
}


