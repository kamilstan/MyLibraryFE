import React from "react";

import "./Header.css"
import {Search} from "../Search/Search";

export const Header = () => (
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