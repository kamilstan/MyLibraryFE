import React, {useContext, useEffect, useState} from "react";
import {SearchContext} from "../../../contexts/search.context";
import {BookEntity} from "types"

import "./BooksList.css"
import {Book} from "../Book/Book";

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
                        books.map(book => (
                            <Book key={book.id} id ={book.id}/>
                        ))
                    }

                </ul>
            </main>




    )
}