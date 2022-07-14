import React, {SyntheticEvent, useEffect, useState} from "react";
import { BookEntity } from "types";
import {Link} from "react-router-dom";

import "./Book.css"

interface Props {
    id: string;
    index: number;
}

export const Book =(props: Props)=> {

    const [book, setBook] = useState<BookEntity | null>(null);

    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:3001/book/${props.id}`);
            const data = await res.json();
            setBook(data);

        })()
    }, [])

    const deleteBook = async (e:SyntheticEvent) => {
        e.preventDefault();

        if(!window.confirm(`Are you sure you want to remove the book with ID: ${props.id}?`)) {
            return;
        };

        await fetch(`http://localhost:3001/book/${props.id}`, {
            method: "DELETE",
        });
    }

    if(book === null) {
        return null
    }

    return (
        <li  className="singleBook">
            <h3>{props.index}. {book.title}</h3>
            <p>Review: {book.review}</p>
            <p>Count: {book.count}</p>
            {/*<button className="button" onClick={deleteBook}>Delete</button>*/}
            <Link className="button" to={`/${props.id}`}>See more..</Link>
        </li>
    )
}