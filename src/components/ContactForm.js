import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const url = '/post';
const ContactForm = () => {
  const sendData = async (url = '', data = { err: 'erroe' }) => {
    await fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  };

  const [person, setPerson] = useState({
    firstName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.email && person.message) {
      const newPerson = { ...person };
      sendData(url, newPerson);
      setPerson({ firstName: '', email: '', message: '' });
    }
  };

  return (
    <>
      <Form>
        <Form.Group className='mb-3' controlId='formUsername'>
          <Form.Label>Name :</Form.Label>
          <Form.Control
            type='text'
            id='firstName'
            name='firstName'
            value={person.firstName}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formEmail'>
          <Form.Label>Email : </Form.Label>
          <Form.Control
            type='email'
            id='email'
            name='email'
            value={person.email}
            onChange={handleChange}
          />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formText'>
          <Form.Label>Message :</Form.Label>
          <Form.Control
            type='text'
            id='message'
            name='message'
            value={person.message}
            onChange={handleChange}
          />
        </Form.Group>
        <Button onClick={handleSubmit} variant='primary' type='submit'>
          Send Email
        </Button>
      </Form>
    </>
  );
};
export default ContactForm;
