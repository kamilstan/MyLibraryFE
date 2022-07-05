import React, {useContext, useEffect, useState} from "react";
import { UserEntity } from "types";
import {Link} from "react-router-dom";

interface Props {
    id: string;
}

export const User = (props: Props) => {

    const [user, setUser] = useState<UserEntity | null>(null);

    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:3001/user/${props.id}`);
            const data = await res.json();
            setUser(data);
        })()
    }, [user])

    const deleteUser = async () => {
        await fetch(`http://localhost:3001/user/${props.id}`, {
            method: "DELETE",
        });
    }

    if (user === null) {
        return null
    }

    return (
        <li  className="singleUser">
            <p><b>Firstname:</b> <span>{user.firstname}</span></p>
            <p><b>Lastname:</b> <span>{user.lastname}</span></p>
            <p><b>Address:</b> <span>{user.address}</span></p>
            <p><b>Password:</b> <span>{user.password}</span></p>
            <button className="button" onClick={deleteUser}>Delete</button>
            <Link className="button" to={`/admin/${user.id}`}>See more..</Link>

        </li>
    )
}