import React, { useState, useReducer } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { reducer } from '../util/reducer';
import Modal from './Modal';
const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: '',
};
const RegisterForm = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  const [person, setPerson] = useState({
    firstName: '',
    email: '',
    password: '',
    passwordCheck: '',
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      person.firstName &&
      person.email &&
      person.password &&
      person.passwordCheck
    ) {
      const newPerson = { ...person };
      //   sendData(url, newPerson);
      setPerson({ firstName: '', email: '', password: '', passwordCheck: '' });
      dispatch({ type: 'ADD_ITEM', payload: newPerson });
    } else {
      dispatch({ type: 'NO_VALUE' });
    }
  };

  return (
    <>
      <Container className=' RegisterForm p-5'>
        {state.isModalOpen && (
          <Modal closeModal={closeModal} modalContent={state.modalContent} />
        )}
        <Form>
          <Form.Group className='mb-3' controlId='formUsername'>
            <Form.Label>Name :</Form.Label>
            <Form.Control
              type='text'
              name='firstName'
              value={person.firstName}
              onChange={handleChange}
            />
          </Form.Group>

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
          <Form.Group className='mb-3' controlId='formPassword'>
            <Form.Label>Password :</Form.Label>
            <Form.Control
              type='password'
              name='password'
              value={person.password}
              onChange={handleChange}
            />
            <Form.Text className='text-muted'>
              Password can contain only lowercasse and numbers
            </Form.Text>
          </Form.Group>
          <Form.Group className='mb-3' controlId='formPasswordCheck'>
            <Form.Label>ReEnter Password :</Form.Label>
            <Form.Control
              type='password'
              name='passwordCheck'
              value={person.passwordCheck}
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
export default RegisterForm;
