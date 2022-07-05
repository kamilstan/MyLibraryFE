import React, {useState} from 'react';

import { SearchContext} from './contexts/search.context';
import {Route, Routes} from "react-router-dom";

import {BooksView} from "./views/BooksView";
import {UsersView} from "./views/UsersView";
import {AddBookView} from "./views/AddBookView";
import {AddUserView} from "./views/AddUserView";
import {NotFoundView} from "./views/NotFoundView";


export const App = () => {

    const [search, setSearch] = useState('');

    return (
        <SearchContext.Provider value={{search, setSearch}}>
            <Routes>
                <Route path="/" element={<BooksView/>} />
                <Route path="/addBook" element={<AddBookView/>}/>
                <Route path="/admin" element={<UsersView/>}/>
                <Route path="/admin/addUser" element={<AddUserView/>}/>
                {/*<Route path="/admin/:userId" element={<User/>}/>*/}
                <Route path="*" element={<NotFoundView/>}/>
            </Routes>
        </SearchContext.Provider>
    );
}
