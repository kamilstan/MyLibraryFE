import React, {useEffect, useState} from "react";
import { BookEntity } from "types";

interface Props {
    id: string;
}

export const Book =(props: Props)=> {

    const [book, setBook] = useState<BookEntity | null>(null)
    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:3001/book/${props.id}`);
            const data = await res.json();
            setBook(data);

        })()
    })
    if(book === null) {
        return <p>Loading...</p>
    }
    return (
        <li  className="singleBook">
            <p><b>Title:</b> <span>{book.title}</span></p>
            <p><b>Author:</b> <span>{book.author}</span></p>
            <p><b>Description:</b> <span>{book.description}</span></p>
            <p><b>Review:</b> <span>{book.review}</span></p>
            <button>Take</button>
        </li>
    )
}