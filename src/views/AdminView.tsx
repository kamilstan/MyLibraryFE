import React from "react";
import {Header} from "../components/layout/Header";
import {Footer} from "../components/layout/Footer/Footer";
import {UserList} from "../components/userComponents/UserList/UserList";
import {Button} from "../components/common/Button/Button";
import {AdminPanel} from "../components/layout/AdminPanel/AdminPanel";

export const AdminView = () => {
    return (
        <>
            <Header/>
            <AdminPanel/>
            <UserList/>
            <Footer/>
        </>
    )
}