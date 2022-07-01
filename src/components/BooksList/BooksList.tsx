import React, {useContext, useEffect} from "react";

import "./BooksList.css"
import {SearchContext} from "../../contexts/search.context";

export const BooksList = () => {

    const {search} = useContext(SearchContext);

    useEffect(() => {
        console.log('making request to the database for', search)
    }, [search]);

    return (
        <main className="books">
            <h1>{search}</h1>
            <ul className="booksList">

                <li className="singleBook">
                    <p><b>Title:</b> <span>Potop</span></p>
                    <p><b>Author:</b> <span>H. Sienkiewicz</span></p>
                    <p><b>Description:</b> <span>Supe książka o polakach</span></p>
                    <p><b>Opinie:</b> <span>4.1</span></p>
                    <button>Take</button>
                </li>
                <li className="singleBook">
                    <p><b>Title:</b> <span>Potop</span></p>
                    <p><b>Author:</b> <span>H. Sienkiewicz</span></p>
                    <p><b>Description:</b> <span>Supe książka o polakach</span></p>
                    <p><b>Opinie:</b> <span>4.1</span></p>
                    <button>Take</button>
                </li>
                <li className="singleBook">
                    <p><b>Title:</b> <span>Potop</span></p>
                    <p><b>Author:</b> <span>H. Sienkiewicz</span></p>
                    <p><b>Description:</b> <span>Supe książka o polakach</span></p>
                    <p><b>Opinie:</b> <span>4.1</span></p>
                    <button>Take</button>
                </li>
            </ul>
        </main>


    )
}