import { useState } from 'react';
import Modal from '../../util/Modal';
import validator from 'email-validator';
import { useSelector, useDispatch } from 'react-redux';
import {
  closeModal,
  nonVailedEmail,
  noValue,
} from '../../redux/actions/actionCreator';

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
        console.log(newPerson);
      } else {
        dispatch(nonVailedEmail());
      }
    } else {
      dispatch(noValue());
    }
  };

  return (
    <>
      <section id='Contact-Form' className='container'>
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
          <div className='Form-Group'>
            <div className='Form-Group' controlId='forFirstname'>
              <label className='mx-2 mt-1'>FirstName: </label>
              <input
                className='Form-Control'
                type='text'
                name='firstName'
                value={person.firstName}
                onChange={handleChange}
              />
            </div>
            <div className='Form-Group' controlId='forLastname'>
              <label className='mx-2 mt-1'>Lastname: </label>
              <input
                className='Form-Control'
                type='text'
                name='lastName'
                value={person.lastName}
                onChange={handleChange}
              />
            </div>
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
          <div className='Form-Group' controlId='formText'>
            <label>Message :</label>
            <textarea
              className='Form-Control'
              name='message'
              value={person.message}
              onChange={handleChange}
            />
          </div>
          <button onClick={handleSubmit} className='btn' type='submit'>
            Send Email
          </button>
        </form>
      </section>
    </>
  );
};
export default ContactForm;
