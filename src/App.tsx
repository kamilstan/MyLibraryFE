import React, {useState} from 'react';

import {Header} from "./components/layout/Header";
import {BooksList} from "./components/BooksList/BooksList";
import { SearchContext } from './contexts/search.context';
import {Route, Routes} from "react-router-dom";
import {AddBookForm} from "./components/AddBookForm/AddBookForm";


export const App = () => {

    const [search, setSearch] = useState('')

    return (
        <SearchContext.Provider value={{search, setSearch}}>
            <Header/>
            <Routes>
                <Route path="/" element={<BooksList/>} />
                <Route path="/addBook" element={<AddBookForm />}/>

            </Routes>
        </SearchContext.Provider>


    );
}
