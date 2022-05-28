import React, { useState, useRef } from 'react';
import { validateEmail } from '../../utils/helpers';
import "./Pages.css";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    });
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_pdjk3zm', 'template_msswe86', form.current, 'Bc92cgAU8G9b4BFwL')
        .then((result) => {
            alert('Message successfully sent!')
            window.location.reload(false)
            // console.log(result.text);
        }, error => {
            alert('Failed to send message, please try again')
            console.log(error.text);
        }
        );
        setFormState(' ');
    };

    // const [errorMessage, setErrorMessage] = useState('');
    // const { name, email, message } = formState;


    // const handleInputChange = (e) => {
    //     if (e.target.name === 'email') {
    //         const isValid = validateEmail(e.target.value);
    //         if (!isValid) {
    //             setErrorMessage('Your email is invalid');
    //         } else {
    //             setErrorMessage('');
    //         }
    //     } else {
    //         if (!e.target.value.length) {
    //             setErrorMessage(`${e.target.name} is required`)
    //         } else {
    //             setErrorMessage('');
    //         }
    //     }
    //     if (!errorMessage) {
    //         setFormState({ ...formState, [e.target.name]: e.target.value });
    //         console.log('Handle Form', formState)
    //     }
    // };

    // const handleFormSubmit = (e) => {
    //     e.preventDefault();
    //     if (!errorMessage) {
    //         console.log('Submit Form', formState)
    //     }

    // }


    return (
        <section className="contact">
            <div className="container">
                <div className="row contact-form">
                    <h1 className="text-center" id="contact">Contact</h1>
                    <hr className="my-4" />
                    <form ref={form} onSubmit={sendEmail} id="contact-form">
                        <div className="col-lg-10 mx-auto mb-4">
                            <label for="name" className="form-label">Name: </label>
                            <input
                                className="form-control" 
                                placeholder="Name"
                                type= "text"
                                name="user_name"
                                // defaultValue = {name}
                                // onBlur= {handleInputChange} 
                                required/>
                            <label for="email" className="form-label">Email address:</label>
                            <input
                                className="form-control"
                                placeholder = "Email"
                                type="email"
                                name="user_email"
                                // defaultValue= {email}
                                // onBlur={handleInputChange}
                                required
                                // type="email"
                            />               
                            <label for="message" className="form-label">Message:</label>
                            <textarea 
                            className="form-control" 
                            placeholder="message"
                            rows="5"
                            type="text"
                            name="message"
                            // defaultValue= {message}
                            // onBlur = {handleInputChange}
                            required
                            ></textarea>
                            <div className='text-center'>
                            <input type="submit" className= 'btn btn-primary btn-xl js-scroll-trigger'id="btn" value="Send" />
                            </div>
                        </div>
                    </form>

                </div>
            </div>

        </section>



    )
}

export default Contact;