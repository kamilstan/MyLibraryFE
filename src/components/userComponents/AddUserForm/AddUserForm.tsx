import React, {SyntheticEvent, useState} from 'react';
import {Link} from "react-router-dom";
import { NewUserEntity } from 'types';
import {Button} from "../../common/Button/Button";
import {Spinner} from "../../common/Spinner/Spinner";

import "./AddUserForm.css"
import {apiUrl} from "../../../config/api";

export const AddUserForm = () => {
    const [loading, setLoading] = useState(false);
    const [id, setId] = useState("");
    const [form, setForm] = useState<NewUserEntity>({
        firstname: '',
        lastname: '',
        address: '',
        password: '',
        email: '',
        username: '',
    });

    const updateForm = (key: string, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }));
    };

    const saveUser = async (e: SyntheticEvent) => {
        e.preventDefault();

        setLoading(true);

        try {
            const res = await fetch(`${apiUrl}/user/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });
            const data = await res.json();

            setId(data.id);

        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return <Spinner/>
    }

    if (id) {
        return (
            <main className="added-user">
                <p className="user-added-p">The user "{form.firstname} {form.lastname}" has been added by ID "{id}"</p>
                <Link to="/admin" className="go-to-main">
                    <Button text="Go back to user list"/>
                </Link>
            </main>
        )
    }

    return (
        <main className="add-user">

            <Link to="/"><Button text="Go back to main page"/></Link>
            <h2>Register new user</h2>

            <form className="add-user-form" onSubmit={saveUser}>
                <p>
                    <label>
                        Firstname: <br/>
                        <input
                            type="text"
                            name="firstname"
                            required
                            maxLength={100}
                            value={form.firstname}
                            onChange={e => updateForm('firstname', e.target.value)}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Lastname: <br/>
                        <input
                            type="text"
                            name="lastname"
                            required
                            maxLength={100}
                            value={form.lastname}
                            onChange={e => updateForm('lastname', e.target.value)}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Username: <br/>
                        <textarea
                            name="username"
                            required
                            maxLength={100}
                            value={form.username}
                            onChange={e => updateForm('username', e.target.value)}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Address: <br/>
                        <textarea
                            name="address"
                            required
                            maxLength={1000}
                            value={form.address}
                            onChange={e => updateForm('address', e.target.value)}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Email: <br/>
                        <textarea
                            name="email"
                            required
                            maxLength={100}
                            value={form.email}
                            onChange={e => updateForm('email', e.target.value)}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Password: <br/>
                        <input
                            type="text"
                            name="password"
                            value={form.password}
                            onChange={e => updateForm('password', e.target.value)}/>
                    </label>
                </p>

                <Button text="Save"/>
            </form>
        </main>

    )
}