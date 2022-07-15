import React, {useContext, useEffect, useState} from "react";
import {SearchContext} from "../../../contexts/search.context";
import {BookEntity} from "types"
import {Book} from "../Book/Book";

import "./BooksList.css"
import {apiUrl} from "../../../config/api";


export const BooksList = () => {

    const {search} = useContext(SearchContext);

    const [books, setBooks] = useState<BookEntity[]>([]);

    useEffect(() => {
        (async () => {
            const res = await fetch(`${apiUrl}/book/search/${search}`)
            const data = await res.json();
            setBooks(data);
        })();

    }, [search]);

    return (

            <main className="books">
                <h2>Books:</h2>
                <ul className="booksList">
                    {
                        books.map((book, index) => (
                             <Book key={book.id} id={book.id} index={index + 1}/>
                        ))
                    }
                </ul>
            </main>




    )
}