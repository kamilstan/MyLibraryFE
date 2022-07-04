import React, {SyntheticEvent, useContext, useState} from "react";
import {Button} from "../common/Button";
import {SearchContext} from "../../contexts/search.context";

import "./Search.css"


export const Search = () => {

    const {search, setSearch} = useContext(SearchContext)
    const [inputValue, setInputValue] = useState(search)

    const setSearchingResult = (e:SyntheticEvent) => {
        e.preventDefault();
        setSearch(inputValue);
    }

    return(
        <form className="search" onSubmit={setSearchingResult} >
            <input placeholder="Start searching..." value={inputValue} onChange={e => setInputValue(e.target.value)} type="text"/>
            <Button text="Find"/>
            <Button text="Add book" to="/addBook"/>
            <Button text="Add user" to="/admin/addUser"/>
        </form>
    )
}