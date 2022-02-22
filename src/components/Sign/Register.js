import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal, noValue } from '../../redux/actions/actionCreator';
import Modal from '../../util/Modal';
import validator from 'email-validator';
import passwordValidator from 'password-validator';

let schema = new passwordValidator();

schema
  .is()
  .min(8)
  .is()
  .max(100)
  .has()
  .lowercase()
  .has()
  .digits(2)
  .has()
  .not()
  .spaces();

const Register = () => {
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();
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
      if (validator.validate(person.email)) {
        if (person.password === person.passwordCheck) {
          if (schema.validate(person.password)) {
            const newPerson = { ...person };
            setPerson({
              firstName: '',
              email: '',
              password: '',
              passwordCheck: '',
            });
            dispatch({ type: 'ADD_ITEM', payload: newPerson });
          } else {
            dispatch({
              type: 'NON_VAILED_PASS',
              payload: schema.validate(person.password, {
                list: true,
              }),
            });
          }
        } else {
          dispatch({
            type: 'NON_VAILED_PASS',
            payload: 'password dosent match',
          });
        }
      } else {
        dispatch({ type: 'NON_VAILED' });
      }
    } else {
      dispatch(noValue());
    }
  };

  return (
    <>
      <div id='sign' className='d-f d-flex'>
        <Container className=' RegisterForm p-5'>
          {modal.isModalOpen && (
            <Modal
              modalContent={modal.modalContent}
              closeModal={() => {
                dispatch(closeModal());
              }}
            />
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
      </div>
    </>
  );
};
export default Register;