import React from "react";
import {Button} from "../common/Button";

import "./Search.css"

export const Search = () => {

    return(
        <div className="search">
            <input placeholder="Search for books.." type="text"/>
            <Button text="Find"/>
        </div>
    )
}