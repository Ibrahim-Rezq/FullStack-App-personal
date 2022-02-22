import React, { useEffect } from 'react';

const Modal = ({ modalContent, closeModal }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 1500);
  });
  return (
    <div className='Modal rounded pt-1 px-2 text-dark'>
      <p className='py-2 fw-bold lead'>{modalContent}</p>
    </div>
  );
};

export default Modal;
