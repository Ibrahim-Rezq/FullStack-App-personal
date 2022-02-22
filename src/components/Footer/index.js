import React from 'react';
import { Container } from 'react-bootstrap';
import { FaReact, FaHeart, FaRegCopyright } from 'react-icons/fa';
const Footer = () => {
  return (
    <>
      <div className='Footer p-3'>
        <Container className='d-f d-flex'>
          <p className='lead ms-5 m-0'>
            Made with <FaHeart className='pb-1 fs-5 text-danger' /> and React{' '}
            <FaReact className='pb-1 fs-5 text-primary' /> by Ibrahim{' '}
            <FaRegCopyright className='pb-1 fs-5' /> 2022
          </p>
        </Container>
      </div>
    </>
  );
};
export default Footer;
