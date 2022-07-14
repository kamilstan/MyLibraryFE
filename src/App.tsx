import React, {useState} from 'react';
import { SearchContext } from './contexts/search.context';
import {Route, Routes} from "react-router-dom";
import {BooksView} from "./views/BooksView";
import {AdminView} from "./views/AdminView";
import {AddBookView} from "./views/AddBookView";
import {Register} from "./views/Register";
import {NotFoundView} from "./views/NotFoundView";
import {SingleUserView} from "./views/SingleUserView";
import {SingleBookView} from "./views/SingleBookView";
import {LoginUserView} from "./views/LoginUserView";


export const App = () => {

    const [search, setSearch] = useState('');

    return (
        <SearchContext.Provider value={{search, setSearch}}>
                <Routes>
                    <Route path="/" element={<BooksView/>} />
                    <Route path="/addBook" element={<AddBookView/>}/>
                    <Route path="/:bookId" element={<SingleBookView/>}/>
                    <Route path="/admin" element={<AdminView/>}/>
                    <Route path="/admin/register" element={<Register/>}/>
                    <Route path="/admin/login" element={<LoginUserView/>}/>
                    <Route path="/admin/:userId" element={<SingleUserView/>}/>
                    <Route path="*" element={<NotFoundView/>}/>
                </Routes>
        </SearchContext.Provider>
    );
}
