import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import "./Pages.css";


const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;


    const handleInputChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`)
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log('Handle Form', formState)
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            console.log('Submit Form', formState)
        }

    }


    return (
        <section className="contact">
            <div className="container">
                <div className="row">
                    <h1 className="text-center" id="contact">Contact</h1>
                    <hr className="my-4" />
                    <form id="contact-form" onSubmit={handleFormSubmit}>
                        <div className="col-lg-10 mx-auto mb-4">
                            <label for="name" className="form-label">Name: </label>
                            <input
                                className="form-control" 
                                placeholder="Name"
                                type= "text"
                                name="name"
                                defaultValue = {name}
                                onBlur= {handleInputChange} />
                            <label for="email" className="form-label">Email address:</label>
                            <input
                                className="form-control"
                                placeholder = "Email"
                                type="email"
                                name="email"
                                defaultValue= {email}
                                onBlur={handleInputChange}
                                // type="email"
                            />               
                            <label for="message" className="form-label">Message:</label>
                            <textarea 
                            className="form-control" 
                            placeholder="message"
                            rows="5"
                            type="text"
                            name="message"
                            defaultValue= {message}
                            onBlur = {handleInputChange}
                            ></textarea>
                            <div className='text-center'>
                            <buttton type="submit" className= 'btn btn-primary btn-xl js-scroll-trigger'id="btn" onClick={handleFormSubmit}>Submit</buttton>
                            </div>
                        </div>
                    </form>

                </div>
            </div>

        </section>



    )
}

export default Contact;