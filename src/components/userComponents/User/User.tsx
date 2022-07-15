import React, {SyntheticEvent, useContext, useEffect, useState} from "react";
import { UserEntity } from "types";
import {Link, useParams} from "react-router-dom";

import "./User.css"
import {apiUrl} from "../../../config/api";

interface Props {
    id: string;
    index: number;
}

export const User = (props: Props) => {

    const [user, setUser] = useState<UserEntity | null>(null);

    useEffect(() => {
        (async () => {
            const res = await fetch(`${apiUrl}/user/${props.id}`);
            const data = await res.json();
            setUser(data);

        })()
    }, [])

    const deleteUser = async (e:SyntheticEvent) => {
        e.preventDefault();
        if(!window.confirm(`Are you sure you want to remove the user with ID: ${props.id}?`)) {
            return;
        };
        await fetch(`${apiUrl}/user/${props.id}`, {
            method: "DELETE",
        });
    }

    if (user === null) {
        return null
    }

    return (
        <li  className="single-user">
            <h3 className="single-user-name"><span>{props.index}. {user.firstname} {user.lastname}</span></h3>
            <button className="button" onClick={deleteUser}>Delete</button>
            <Link className="button" to={`/admin/${props.id}`}>See more..</Link>

        </li>
    )
}