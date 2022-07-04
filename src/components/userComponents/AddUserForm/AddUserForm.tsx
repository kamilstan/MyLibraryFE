import React, {SyntheticEvent, useState} from 'react';
import {Link} from "react-router-dom";
import {Button} from "../../common/Button";

import "./AddUserForm.css"

export const AddUserForm = () => {
    const [loading, setLoading] = useState(false);
    const [id, setId] = useState("");
    const [form, setForm] = useState({
        firstname: '',
        lastname: '',
        address: '',
        password: '',

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
            const res = await fetch("http://localhost:3001/user", {
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
        return <h2>Loading..</h2>
    }

    if (id) {
        return (
            <main className="added-user">
                <p className="user-added-p">The user "{form.firstname} {form.lastname}" has been added by ID "{id}"</p>
                <Link to="/" className="go-to-main">
                    <Button text="Go back to main page"/>
                </Link>
            </main>
        )
    }


    return (
        <main className="add-user">
            <h2>Add new user</h2>
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