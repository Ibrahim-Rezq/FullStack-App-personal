import React, { useEffect } from 'react';

const Modal = ({ modalContent, closeModal }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 30000);
  });
  return (
    <div className='Modal py-1 px-2 text-dark'>
      <p className='pt-2'>{modalContent}</p>
    </div>
  );
};

export default Modal;
