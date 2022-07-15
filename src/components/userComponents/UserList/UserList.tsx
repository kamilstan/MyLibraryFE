import React, {useContext, useEffect, useState} from "react";
import {SearchContext} from "../../../contexts/search.context";
import {UserEntity} from "types";
import {User} from "../User/User"

import "./UserList.css"
import {apiUrl} from "../../../config/api";

export const UserList = () => {

    const {search} = useContext(SearchContext);
    const [users, setUsers] = useState<UserEntity[]>([]);

    useEffect(() => {
        (async () => {
            const res = await fetch(`${apiUrl}/user/search/${search}`)
            const data = await res.json();
            setUsers(data);
        })();

    }, [search]);

    return (
            <main className="users">
                <h2>Users:</h2>
                <ul className="usersList">
                    {
                        users.map((user,index) => (

                            <User key={user.id} id={user.id} index={index +1} />

                        ))
                    }
                </ul>
            </main>
    )
}