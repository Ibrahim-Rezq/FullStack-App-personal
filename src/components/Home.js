import React, { useState, useRef, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
const Home = () => {
  return (
    <>
      <div className='Home p-5'>
        <LoginForm></LoginForm>
        <RegisterForm></RegisterForm>
      </div>
    </>
  );
};

export default Home;
