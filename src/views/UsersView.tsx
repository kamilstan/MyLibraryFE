import React from "react";
import {Header} from "../components/layout/Header";
import {Footer} from "../components/layout/Footer/Footer";
import {UserList} from "../components/userComponents/UserList/UserList";

export const UsersView = () => {
    return (
        <>
            <Header/>
            <UserList/>
            <Footer/>
        </>
    )
}