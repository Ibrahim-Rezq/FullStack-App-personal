import React from 'react'
import ContactForm from './ContactForm'
import { Container } from 'react-bootstrap'

const Contact = () => {
    return (
        <section id='Contact' className='p-md-5'>
            <Container className='text-primary mx-auto py-3 d-md-flex flex-column d-f'>
                <h3 className='display-1'>Contact Me</h3>
                <p className='lead'>Would Be Glade To Hear From You</p>
                <ContactForm />
            </Container>
        </section>
    )
}

export default Contact
