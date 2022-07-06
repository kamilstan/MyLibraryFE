import React, {useContext, useEffect, useState} from "react";
import {SearchContext} from "../../../contexts/search.context";
import {BookEntity} from "types"
import {Book} from "../Book/Book";

import "./BooksList.css"


export const BooksList = () => {

    const {search} = useContext(SearchContext);

    const [books, setBooks] = useState<BookEntity[]>([]);

    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:3001/book/search/${search}`)
            const data = await res.json();
            setBooks(data);
        })();

    }, [search]);

    return (

            <main className="books">
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