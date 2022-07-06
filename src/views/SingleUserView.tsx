import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {UserEntity} from "types";

import "./SingleUserView.css";

export const SingleUserView = () => {

    const {userId} = useParams();

    const [user, setUser] = useState<UserEntity | null>(null);

    useEffect(() => {
        (async () => {
                const res = await fetch(`http://localhost:3001/user/${userId}`);
                const data = await res.json();
                setUser(data);
            })();
    }, []);

    if (user === null){
        return null
    }

    console.log(user)
    return (
        <div className="single-user-view">
            <header className="single-item-header">
                <h1>User: {user.firstname} {user.lastname}</h1>
                <Link className="button" to={`/admin`}>Go to user list</Link>
            </header>

            <main className="single-item-main">
                <p>User ID: <b>{user.id}</b></p>
                <p>Address: <b>{user.address}</b></p>
                <p>Password: <b>{user.password}</b></p>
            </main>


        </div>

    )
}