import React from "react";

import "./BooksList.css"

export const BooksList = () => {

    return (
        <main className="books">
            <ul className="booksList">
                <li className="singleBook">
                    <p><b>Title:</b> <span>Potop</span></p>
                    <br/>
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