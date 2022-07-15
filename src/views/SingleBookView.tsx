import React, {useEffect, useState} from "react";
import {BookEntity} from "types"
import {Link, useParams} from "react-router-dom";

import "./SingleBookView.css"
import {apiUrl} from "../config/api";

export const SingleBookView = () => {

    const {bookId} = useParams();

    const [book, setBook] = useState<BookEntity | null>(null);

    useEffect(() => {
        (async () => {
            const res = await fetch(`${apiUrl}/book/${bookId}`);
            const data = await res.json();
            setBook(data);
        })();
    }, []);

    if (book === null){
        return null
    }

    return (
        <div className="single-book-view" >
            <header className="single-book-header">
                <h1>Title: <b>{book.title}</b></h1>
                <Link className="button" to={`/`}>Go to book list</Link>
            </header>

            <main className="single-book-main">
                <p>Book ID: <b>{book.id}</b></p>
                <p>Author: <b>{book.author}</b></p>
                <p>Description: <b>{book.description}</b></p>
                <p>Review: <b>{book.review}</b></p>
                <p>Count: <b>{book.count}</b></p>
            </main>

        </div>

    )

}