import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal, noValue, signUp } from '../../redux/actions/actionCreator';
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
    userName: '',
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
    if (person.userName && person.email && person.password) {
      if (validator.validate(person.email)) {
        if (schema.validate(person.password)) {
          const d = new Date();
          const newPerson = {
            ...person,
            id: d.getTime().toString(),
            created: '10-3-2020',
          };
          setPerson({
            userName: '',
            email: '',
            password: '',
          });
          dispatch(signUp(newPerson));
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
      dispatch(noValue());
    }
  };

  return (
    <>
      <div id='RegisterForm' className='container'>
        {modal.isModalOpen && (
          <Modal
            modalContent={modal.modalContent}
            closeModal={() => {
              dispatch(closeModal());
            }}
          />
        )}

        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}>
          <div className='Form-Group' controlId='formUsername'>
            <label>Name :</label>
            <input
              className='Form-Control'
              type='text'
              name='userName'
              value={person.userName}
              onChange={handleChange}
            />
          </div>

          <div className='Form-Group' controlId='formEmail'>
            <label>Email : </label>
            <input
              className='Form-Control'
              type='email'
              name='email'
              value={person.email}
              onChange={handleChange}
            />
            <p className='Form-Text'>
              We'll never share your email with anyone else.
            </p>
          </div>
          <div className='Form-Group' controlId='formPassword'>
            <label>Password :</label>
            <input
              className='Form-Control'
              type='password'
              name='password'
              value={person.password}
              onChange={handleChange}
            />
            <p className='Form-Text'>
              Password can contain only lowercasse and numbers
            </p>
          </div>
          <button onClick={handleSubmit} className='btn' type='submit'>
            Send Email
          </button>
        </form>
      </div>
    </>
  );
};
export default Register;
