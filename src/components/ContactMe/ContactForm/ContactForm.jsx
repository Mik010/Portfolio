import React, { useState } from 'react'
import "./ContactForm.css";
import { useForm } from "react-hook-form"
import emailjs from '@emailjs/browser';

const ContactForm2 = () => {

    //* Inizializzato lo stato dei popup
    const [successPopup, setSuccessPopup] = useState(false);
    const [errorPopup, setErrorPopup] = useState(false);

    //* Hook-form
    const form = useForm();
    const { register, handleSubmit, formState, reset } = form;
    const { errors } = formState;

    //*Invio email con passaggio di dati se servono in un futuro, e passo l'evento che serve ad emailjs.
    //*Al terzo paramentro infatti ha bisogno del form HTML e non i dati come chiave valore. :) rido per non pianegere
    const sendEmail = (data, e) => {
        emailjs.sendForm('service_nl5amza', 'template_zrufhjm', e.target, 'ojKc7uC5D1pspMYj-')
            .then((result) => {
                console.log(result.text);
                setSuccessPopup(true); //*Cambio dello stato
                reset()
            })
            .catch((error) => {
                console.log(error.text);
                setErrorPopup(true); //*Cambio dello stato
            })
    }

    //*Funzione per chiudere i popup
    const closePopup = () => {
        setSuccessPopup(false);
        setErrorPopup(false);
    }


    return (
        <div className='contact-form-content'>
            <form onSubmit={handleSubmit((data, e) => sendEmail(data, e))} noValidate>
                <div className='name-container'>

                    <input type='text' {...register("user_name", { required: "Firts name is required" })} placeholder='First Name' />

                    <input type='text' {...register("user_surname", { required: "Last name is required" })} placeholder='Last Name' />

                </div>
                <>
                    {errors.user_name?.message}
                    {errors.user_surname && " / "}
                </>
                <>{errors.user_surname?.message}</>

                <input type='email' placeholder='Email'
                    {...register("user_email", {
                        pattern: {
                            value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                            message: "Invalid email format",

                        }, required: "Email is required"
                    })} />
                <>{errors.user_email?.message}</>

                <textarea placeholder='Message' rows={3}
                    {...register("message", {
                        required: "Message is required"
                    })}>
                </textarea>
                <>{errors.message?.message}</>

                <button>SEND</button>
            </form>

            {successPopup && (
                <div className="popup success-popup">
                    <p>Submitted successfully!</p>
                    <button onClick={closePopup}>X</button>
                </div>
            )}

            {errorPopup && (
                <div className="popup error-popup">
                    <p>Error submitting. Please try again later.</p>
                    <button onClick={closePopup}>X</button>
                </div>
            )}
        </div>

    )
}

export default ContactForm2
