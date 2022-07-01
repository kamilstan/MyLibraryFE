import React, {useState} from 'react';

import {Header} from "./components/layout/Header";
import {BooksList} from "./components/BooksList/BooksList";
import { SearchContext } from './contexts/search.context';


export const App = () => {

    const [search, setSearch] = useState('')

    return (
        <SearchContext.Provider value={{search, setSearch}}>
            <Header/>
            <BooksList/>
        </SearchContext.Provider>


    );
}
