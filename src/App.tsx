import React, {useState} from 'react';

import { SearchContext} from './contexts/search.context';
import {Route, Routes, useParams} from "react-router-dom";

import {BooksView} from "./views/BooksView";
import {UsersView} from "./views/UsersView";
import {AddBookView} from "./views/AddBookView";
import {AddUserView} from "./views/AddUserView";
import {NotFoundView} from "./views/NotFoundView";
import {SingleUserView} from "./views/SingleUserView";
import {SingleBookView} from "./views/SingleBookView";


export const App = () => {

    const [search, setSearch] = useState('');

    return (
        <SearchContext.Provider value={{search, setSearch}}>
            <Routes>
                <Route path="/" element={<BooksView/>} />
                <Route path="/addBook" element={<AddBookView/>}/>
                <Route path="/:bookId" element={<SingleBookView/>}/>
                <Route path="/admin" element={<UsersView/>}/>
                <Route path="/admin/addUser" element={<AddUserView/>}/>
                <Route path="/admin/:userId" element={<SingleUserView/>}/>
                <Route path="*" element={<NotFoundView/>}/>
            </Routes>
        </SearchContext.Provider>
    );
}
