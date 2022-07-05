import React, {useContext, useEffect, useState} from "react";
import {SearchContext} from "../../../contexts/search.context";
import {UserEntity} from "types";
import {User} from "../User/User"

import "./UserList.css"

export const UserList = () => {

    const {search} = useContext(SearchContext);
    const [users, setUsers] = useState<UserEntity[]>([]);

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
                            <User key={user.id} id={user.id}/>

                        ))
                    }
                </ul>
            </main>
    )
}