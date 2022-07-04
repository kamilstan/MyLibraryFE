import React, {useState} from 'react';

import {Header} from "./components/layout/Header";
import {BooksList} from "./components/bookComponents/BooksList/BooksList";
import {UserList} from "./components/userComponents/UserList/UserList";
import { SearchContext } from './contexts/search.context';
import {Route, Routes} from "react-router-dom";
import {AddBookForm} from "./components/bookComponents/AddBookForm/AddBookForm";
import {AddUserForm} from "./components/userComponents/AddUserForm/AddUserForm";


export const App = () => {

    const [search, setSearch] = useState('')

    return (
        <SearchContext.Provider value={{search, setSearch}}>
            <Header/>
            <Routes>
                <Route path="/" element={<BooksList/>} />
                <Route path="/addBook" element={<AddBookForm />}/>
                <Route path="/admin" element={<UserList/>} />
                <Route path="/admin/addUser" element={<AddUserForm />}/>

            </Routes>
        </SearchContext.Provider>


    );
}
