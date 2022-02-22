import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavLink, Nav, Container, NavDropdown } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { BsPersonCircle } from 'react-icons/bs';

const Navigation = () => {
  const sign = useSelector((state) => state.sign);
  const [path, setPath] = useState(window.location.pathname);
  const Scroll = (e) => {
    e.preventDefault();
    const navBar = document.querySelector('#NavBar');
    const navBarHeight = navBar.getBoundingClientRect().height;
    const target = e.target.getAttribute('href');
    const elem = document.querySelector(target);
    const top = elem.getBoundingClientRect().top + window.scrollY;
    window.scroll({
      top: top - navBarHeight,
      behavior: 'smooth',
    });
    setTimeout(() => {
      setPath(window.location.pathname);
    }, 0);
  };
  const ScrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
    setTimeout(() => {
      setPath(window.location.pathname);
    }, 0);
  };
  return (
    <Navbar id='NavBar' bg='dark' variant='dark' sticky='top' expand='md'>
      <Container>
        <Link className='navbar-brand font-monospace fs-3' to='/'>
          I_R
        </Link>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='m-auto'>
            <RouteLink
              name={'home'}
              isDropDown={false}
              ScrollToTop={ScrollToTop}
            />
            <RouteLink
              name={'blog'}
              isDropDown={false}
              ScrollToTop={ScrollToTop}
            />
            {path !== '/' || (
              <>
                <PageLink name={'Projects'} Scroll={Scroll} />
                <PageLink name={'Posts'} Scroll={Scroll} />
                <PageLink name={'Contact'} Scroll={Scroll} />
              </>
            )}
          </Nav>
        </Navbar.Collapse>
        <div className='account d-flex d-f'>
          {(sign.isSigndIn && (
            <Navbar.Text>Signed in as: {sign.name}</Navbar.Text>
          )) || (
            <>
              <NavDropdown
                title={<BsPersonCircle fontSize={'1.2rem'} />}
                id='basic-nav-dropdown'>
                <RouteLink
                  name={'login'}
                  isDropDown={true}
                  ScrollToTop={ScrollToTop}
                />
                <RouteLink
                  name={'register'}
                  isDropDown={true}
                  ScrollToTop={ScrollToTop}
                />
              </NavDropdown>
            </>
          )}
        </div>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
      </Container>
    </Navbar>
  );
};

export const PageLink = ({ name, Scroll }) => {
  return (
    <>
      <NavLink
        role='button'
        className='nav-link'
        tabIndex='0'
        href={'#' + name}
        onClick={Scroll}>
        {name}
      </NavLink>
    </>
  );
};
export const RouteLink = ({ name, ScrollToTop, isDropDown }) => {
  return (
    <>
      <Link
        role='button'
        className={
          'nav-link text-capitalize' + (isDropDown ? ' dropdown-item' : '')
        }
        tabIndex='0'
        to={'/' + (name == 'home' ? '' : name)}
        onClick={ScrollToTop}>
        {name}
      </Link>
    </>
  );
};

export default Navigation;
