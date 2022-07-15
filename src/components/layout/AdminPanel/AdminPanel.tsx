import React from "react";

import "./AdminPanel.css"
import {Button} from "../../common/Button/Button";

export const AdminPanel = () => {
    return(
        <div className="admin-panel">
            <p>Admin Panel</p>
            <Button text="Add book" to="/addBook"/>
            <Button text="Add user" to="/admin/register"/>
        </div>
    )
}