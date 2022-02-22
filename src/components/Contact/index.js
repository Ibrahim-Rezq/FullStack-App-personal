import React from 'react';
import ContactForm from './ContactForm';
import { Container } from 'react-bootstrap';

const Contact = () => {
  return (
    <section id='Contact' className='p-md-5 bg-sub'>
      <Container className='text-primary mx-auto py-3 d-xxl-flex d-f-b'>
        <div className='Contact-Text text-center p-3 mb-5 text-nowrap'>
          <h3 className='display-1'>Contact Me</h3>
          <p className='lead'>Would Be Glade To Hear From You</p>
        </div>
        <ContactForm />
      </Container>
    </section>
  );
};

export default Contact;
