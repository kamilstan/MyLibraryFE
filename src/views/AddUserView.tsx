import React from "react";
import {Header} from "../components/layout/Header";
import {Footer} from "../components/layout/Footer/Footer";
import {AddUserForm} from "../components/userComponents/AddUserForm/AddUserForm";


export const AddUserView = () => {
    return (
        <>
            <AddUserForm/>
            <Footer/>
        </>
    )
}