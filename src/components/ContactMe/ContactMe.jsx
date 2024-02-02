import React from 'react'
import "./ContactMe.css"
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import ContactForm from './ContactForm/ContactForm'

const ContactMe = () => {
    return (
        <section className='contact-container'>
            <h5>Contact Me</h5>

            <div className='contact-content'>
                <div style={{ flex: 1 }}>
                    <ContactInfoCard iconUrl="./assets/images/logo_miki.png" text="michele01.cascarano@gmail.com" />
                    <ContactInfoCard iconUrl="./assets/images/logo_miki.png" text="https://github.com/Mik010" />
                </div>
                <div style={{ flex: 1 }}></div>
                <ContactForm />
            </div>
        </section>
    )
}

export default ContactMe
