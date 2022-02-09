import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar bg='dark' variant='dark' sticky='top' expand='md'>
      <Container>
        <Link className='navbar-brand' to='/'>
          IbrahimRezq
        </Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Link role='button' className='nav-link' tabIndex='0' to='/'>
              Home
            </Link>
            <Link role='button' className='nav-link' tabIndex='0' to='/contact'>
              Contact
            </Link>
            <NavDropdown title='Who Am I?' id='basic-nav-dropdown'>
              <Link
                data-rr-ui-dropdown-item=''
                className='dropdown-item'
                role='button'
                tabIndex='0'
                to='/about'>
                About
              </Link>
              <Link
                data-rr-ui-dropdown-item=''
                className='dropdown-item'
                role='button'
                tabIndex='0'
                to='/projects'>
                Projects
              </Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
