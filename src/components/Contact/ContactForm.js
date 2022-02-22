import React, { useState, useReducer } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import Modal from '../../util/Modal';
import validator from 'email-validator';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal, noValue } from '../../redux/actions/actionCreator';

const ContactForm = () => {
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const [person, setPerson] = useState({
    firstName: '',
    lastName: '',
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
    if (person.firstName && person.lastName && person.email && person.message) {
      if (validator.validate(person.email)) {
        const newPerson = { ...person };
        setPerson({
          firstName: '',
          lastName: '',
          email: '',
          message: '',
        });
        dispatch({ type: 'ADD_ITEM' });
      } else {
        dispatch({ type: 'NON_VAILED' });
      }
    } else {
      dispatch(noValue());
    }
  };

  return (
    <>
      <Container id='Contact-Form' className='rounded'>
        {modal.isModalOpen && (
          <Modal
            modalContent={modal.modalContent}
            closeModal={() => {
              dispatch(closeModal());
            }}
          />
        )}
        <Form className=' p-4 w-100 rounded w-75'>
          <div className='mb-3 d-md-flex justify-content-between'>
            <Form.Group
              className='contact-name mb-3 me-3 d-md-flex flex-column'
              controlId='forFirstname'>
              <Form.Label className='mx-2 mt-1'>FirstName: </Form.Label>
              <Form.Control
                type='text'
                name='firstName'
                value={person.firstName}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group
              className='contact-name mb-3 ms-md-3 d-md-flex flex-column'
              controlId='forLastname'>
              <Form.Label className='mx-2 mt-1'>Lastname: </Form.Label>
              <Form.Control
                type='text'
                name='lastName'
                value={person.lastName}
                onChange={handleChange}
              />
            </Form.Group>
          </div>

          <Form.Group className='mb-3' controlId='formEmail'>
            <Form.Label>Email : </Form.Label>
            <Form.Control
              type='email'
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
              as='textarea'
              style={{ height: '200px' }}
              name='message'
              value={person.message}
              onChange={handleChange}
            />
          </Form.Group>
          <Button onClick={handleSubmit} variant='primary' type='submit'>
            Send Email
          </Button>
        </Form>
      </Container>
    </>
  );
};
export default ContactForm;
