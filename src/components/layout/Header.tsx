import React, {useContext} from "react";

import "./Header.css"
import {Search} from "../Search/Search";
import {SearchContext} from "../../contexts/search.context";

export const Header = () => {

    return (

        <header className="header">
            <nav className="nav">
                <ul className="menu">
                    <li className="logo">My-Library</li>
                    <li className="item"><a href="#">Login</a></li>
                    <li className="item"><a href="#">Register</a></li>
                </ul>
            </nav>
            <Search/>

        </header>
    )
}


