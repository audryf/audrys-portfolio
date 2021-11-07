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
            <h1 className="row justify-content-center m-5 p-5 header-font display-3">Have a question?</h1>
            <br />
            <form className="container" id="contact-form" onSubmit={submitHandler}>
                <div className="row">
                    <label htmlFor="name">Name: </label>
                    <input name="name" type="text" onBlur={changeHandler} defaultValue={name} />
                </div>
                <br />
                <div className="row">
                    <label htmlFor="email">Email:</label>
                    <input name="email" type="email" onBlur={changeHandler} defaultValue={email} />
                </div>
                <br />
                <div className="row">
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" onBlur={changeHandler} defaultValue={message} rows="5" />
                </div>
                <br />
                {error && (
                    <div>
                        <p>{error}</p>
                    </div>
                )}
                <button className="btn btn-outline-light btn-lg center" type="submit">Submit</button>
            </form>
            
        </section>
    );


}

export default Contact;