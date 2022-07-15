import React from "react";

import {Header} from "../components/layout/Header";
import {Footer} from "../components/layout/Footer/Footer";
import {AddBookForm} from "../components/bookComponents/AddBookForm/AddBookForm";

export const AddBookView = () => {
    return (
        <>
            <AddBookForm/>
            <Footer/>
        </>
    )
}