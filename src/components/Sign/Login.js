import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal, noValue, signIn } from '../../redux/actions/actionCreator';
import Modal from '../../util/Modal';
import validator from 'email-validator';

const Login = () => {
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const [person, setPerson] = useState({
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
    if (person.email && person.password) {
      if (validator.validate(person.email)) {
        const newPerson = { ...person };
        setPerson({ email: person.email, password: '' });
        dispatch(signIn(newPerson));
      } else {
        dispatch({ type: 'NON_VAILED' });
      }
    } else {
      dispatch(noValue());
    }
  };

  return (
    <>
      <section id='LoginForm' className='container'>
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
          <div className='Form-Group' controlId='formEmaill'>
            <label>Email : </label>
            <input
              className='Form-Control'
              type='email'
              name='email'
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className='Form-Group' controlId='formPasswordl'>
            <label>Password :</label>
            <input
              className='Form-Control'
              type='password'
              name='password'
              value={person.password}
              onChange={handleChange}
            />
            <p className='Form-Text'>Make Sure CapsLock is disapled</p>
          </div>
          <button onClick={handleSubmit} className='btn' type='submit'>
            Send Email
          </button>
        </form>
      </section>
    </>
  );
};
export default Login;
