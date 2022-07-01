import React, {SyntheticEvent, useContext, useState} from "react";
import {Button} from "../common/Button";

import "./Search.css"
import {SearchContext} from "../../contexts/search.context";

export const Search = () => {

    const {search, setSearch} = useContext(SearchContext)
    const [inputValue, setInputValue] = useState(search)

    const setSearchingResult = (e:SyntheticEvent) => {
        e.preventDefault();
        setSearch(inputValue);
    }

    return(
        <form className="search" onSubmit={setSearchingResult} >
            <input placeholder="Search for books.." value={inputValue} onChange={e => setInputValue(e.target.value)} type="text"/>
            <Button text="Find"/>
        </form>
    )
}