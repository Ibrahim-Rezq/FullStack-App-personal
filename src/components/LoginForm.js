import React, { useState, useReducer } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { reducer } from '../util/reducer';
import Modal from './Modal';
const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: '',
};
const LoginForm = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  const [person, setPerson] = useState({
    firstName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.email && person.password) {
      const newPerson = { ...person };
      //   sendData(url, newPerson);
      setPerson({ firstName: '', email: '', password: '' });
      dispatch({ type: 'ADD_ITEM', payload: newPerson });
    } else {
      dispatch({ type: 'NO_VALUE' });
    }
  };

  return (
    <>
      <Container className='LoginForm p-5'>
        {state.isModalOpen && (
          <Modal closeModal={closeModal} modalContent={state.modalContent} />
        )}
        <Form>
          <Form.Group className='mb-3' controlId='formEmaill'>
            <Form.Label>Email : </Form.Label>
            <Form.Control
              type='email'
              name='email'
              value={person.email}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formPasswordl'>
            <Form.Label>Password :</Form.Label>
            <Form.Control
              type='password'
              name='password'
              value={person.password}
              onChange={handleChange}
            />
            <Form.Text className='text-muted'>
              Make Sure CapsLock is disapled
            </Form.Text>
          </Form.Group>
          <Button onClick={handleSubmit} variant='primary' type='submit'>
            Send Email
          </Button>
        </Form>
      </Container>
    </>
  );
};
export default LoginForm;
