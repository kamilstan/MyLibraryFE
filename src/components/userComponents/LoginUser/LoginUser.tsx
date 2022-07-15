import React, {SyntheticEvent, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {LoginUserEntity} from "types";
import {Button} from "../../common/Button/Button";
import {Spinner} from "../../common/Spinner/Spinner";


import "./LoginUser.css"
import {apiUrl} from "../../../config/api";


export const LoginUser = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState<LoginUserEntity>({
        id: '',
        email: '',
        password: '',
    })
    const [token, setToken] = useState();

    const updateForm = (key: string, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }));
    };

    const login = async (e: SyntheticEvent) => {
        e.preventDefault();

        setLoading(true);

        try {

            const res = await fetch(`${apiUrl}/user/login`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });
            const data = await res.json();
            console.log("token", data.accessToken)
            setToken(data.accessToken)

        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return <Spinner/>
    }
    if (token) {

        navigate('/admin');
    }


    return (
        <main className="login-user">

            <Link to="/"><Button text="Go back to main page"/></Link>
            <h2>Login</h2>

            <form className="login-form" onSubmit={login}>

                <p>
                    <label>
                        Email: <br/>
                        <input
                            type="email"
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
                            type="password"
                            name="password"
                            required
                            value={form.password}
                            onChange={e => updateForm('password', e.target.value)}/>
                    </label>
                </p>

                <Button text="Save"/>
            </form>
            <div className="register-info">
                <p >Need an account?</p>
                <Link to="/admin/register"><Button text="Sign up"/></Link>
            </div>

        </main>

    )
}
