import React, {useContext, useEffect, useState} from "react";
import {SearchContext} from "../../../contexts/search.context";
import {UserEntity} from "types"

import "./UserList.css"
import {Header} from "../../layout/Header";


export const UserList = () => {

    const {search} = useContext(SearchContext);
    const [users, setUsers] = useState<UserEntity[]>([]);
    console.log(users)

    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:3001/user/search/${search}`)
            const data = await res.json();
            setUsers(data);
            console.log(data)
        })();

    }, [search]);

    return (

            <main className="users">

                <ul className="usersList">

                    {
                        users.map(user => (
                            <li  key={user.id} className="singleUser">
                                <p><b>Firstname:</b> <span>{user.firstname}</span></p>
                                <p><b>Lastname:</b> <span>{user.lastname}</span></p>
                                <p><b>Address:</b> <span>{user.address}</span></p>
                                <p><b>Password:</b> <span>{user.password}</span></p>

                            </li>
                        ))
                    }
                </ul>
            </main>
    )
}