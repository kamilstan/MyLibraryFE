import React, {SyntheticEvent, useState} from "react";

import "./AddBookForm.css"
import {Button} from "../../common/Button/Button";
import {Link} from "react-router-dom";
import { NewBookEntity } from "types";
import {Spinner} from "../../common/Spinner/Spinner";
import {apiUrl} from "../../../config/api";

export const AddBookForm = () => {

    const [loading, setLoading] = useState(false);
    const [id, setId] = useState("");
    const [form, setForm] = useState<NewBookEntity>({
        title: '',
        author: '',
        description: '',
        review: 0,
        count: 0,
    });

    const updateForm = (key: string, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }));
    };

    const saveBook = async (e: SyntheticEvent) => {
        e.preventDefault();

        setLoading(true);

        try {
            const res = await fetch(`${apiUrl}/book`, {
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
            <main className="added-book">
                <p className="book-added-p">The book "{form.title}" has been added by ID "{id}"</p>
                <Link to="/" className="go-to-main">
                    <Button text="Go back to book list"/>
                    </Link>
            </main>
        )
    }


    return (
        <main className="add-book">

            <Link to="/"><Button text="Go back to main page"/></Link>
            <h2>Add new book</h2>

            <form className="add-book-form" onSubmit={saveBook}>
                <p>
                    <label>
                        Title: <br/>
                        <input
                            type="text"
                            name="title"
                            required
                            maxLength={200}
                            value={form.title}
                            onChange={e => updateForm('title', e.target.value)}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Author: <br/>
                        <input
                            type="text"
                            name="author"
                            required
                            maxLength={100}
                            value={form.author}
                            onChange={e => updateForm('author', e.target.value)}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Description: <br/>
                        <textarea
                            name="description"
                            required
                            maxLength={1000}
                            value={form.description}
                            onChange={e => updateForm('description', e.target.value)}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Review: <br/>
                        <input
                            type="number"
                            name="review"
                            value={form.review}
                            onChange={e => updateForm('review', Number(e.target.value))}/>
                    </label>
                </p>
                <p>
                    <label>
                        Count: <br/>
                        <input
                            type="number"
                            name="count"
                            value={form.count}
                            onChange={e => updateForm('count', Number(e.target.value))}
                        />
                    </label>
                </p>
                <Button text="Save"/>
            </form>
        </main>

    )
}