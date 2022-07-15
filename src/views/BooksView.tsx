import React from "react";
import {Header} from "../components/layout/Header";
import {BooksList} from "../components/bookComponents/BooksList/BooksList";
import {Footer} from "../components/layout/Footer/Footer";

export const BooksView = () => {

    return (
        <>
            <Header/>
            <BooksList/>
            <Footer/>
        </>
    )
}