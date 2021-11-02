import React, { useState } from "react";
import { validate } from 'react-email-validator'

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [error, setError] = useState('');

    const { name, email, message } = formState;

    function changeHandler(event) {
        if (!error) {
            setFormState({ ...formState, [event.target.name]: event.target.value })
        }


        if (event.target.name === 'email') {
            const validEmail = validate(event.target.value);

            if (!validEmail) {
                setError('Invalid email address.');
            } else {
                setError('');
            }
        } else {
            if (event.target.value.length === 0) {
                setError(`${event.target.name} cannont be blank.`)
            } else {
                setError('')
            }
        }
        console.log(error)
    }

    function submitHandler(event) {
        event.preventDefault();
        console.log(formState)
    }



    return (
        <section>
            <h1>Contact me</h1>
            <form id="contact-form" onSubmit={submitHandler}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input name="name" type="text" onBlur={changeHandler} defaultValue={name} />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input name="email" type="email" onBlur={changeHandler} defaultValue={email} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" onBlur={changeHandler} defaultValue={message} rows="5" />
                </div>
                {error && (
                    <div>
                        <p>{error}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </section>
    );


}

export default Contact;