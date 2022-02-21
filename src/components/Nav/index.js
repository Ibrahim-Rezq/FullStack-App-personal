import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, NavLink, Nav, Container, NavDropdown } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { signIn, signUp } from '../../redux/actions/actionCreator'
import { BsPersonCircle } from 'react-icons/bs'

const Navigation = () => {
    const sign = useSelector((state) => state.sign)
    const dispatch = useDispatch()
    const [path, setPath] = useState(window.location.pathname)
    const Scroll = (e) => {
        e.preventDefault()
        const navBar = document.querySelector('#NavBar')
        const navBarHeight = navBar.getBoundingClientRect().height
        const target = e.target.getAttribute('href')
        const elem = document.querySelector(target)
        const top = elem.getBoundingClientRect().top + window.scrollY
        window.scroll({
            top: top - navBarHeight,
            behavior: 'smooth',
        })
        setTimeout(() => {
            setPath(window.location.pathname)
        }, 0)
    }
    const ScrollToTop = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth',
        })
        setTimeout(() => {
            setPath(window.location.pathname)
        }, 0)
    }
    return (
        <Navbar id='NavBar' bg='dark' variant='dark' sticky='top' expand='md'>
            <Container>
                <Link className='navbar-brand font-monospace fs-3' to='/'>
                    I_R
                </Link>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='m-auto'>
                        <Link
                            role='button'
                            className='nav-link'
                            tabIndex='0'
                            to='/'
                            onClick={ScrollToTop}
                        >
                            Home
                        </Link>
                        <Link
                            role='button'
                            className='nav-link'
                            tabIndex='0'
                            to='/blog'
                            onClick={ScrollToTop}
                        >
                            Blog
                        </Link>
                        {path !== '/' || (
                            <>
                                <NavLink
                                    role='button'
                                    className='nav-link'
                                    tabIndex='0'
                                    href='#Projects'
                                    onClick={Scroll}
                                >
                                    Projects
                                </NavLink>
                                <NavLink
                                    role='button'
                                    className='nav-link'
                                    tabIndex='0'
                                    href='#Posts'
                                    onClick={Scroll}
                                >
                                    Posts
                                </NavLink>
                                <NavLink
                                    role='button'
                                    className='nav-link'
                                    tabIndex='0'
                                    href='#Contact'
                                    onClick={Scroll}
                                >
                                    Contact
                                </NavLink>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
                <div className='account d-flex d-f'>
                    {(sign.isSigndIn && (
                        <Navbar.Text>
                            Signed in as: <a href='#login'>{sign.name}</a>
                        </Navbar.Text>
                    )) || (
                        <>
                            <NavDropdown
                                title={<BsPersonCircle fontSize={'1.2rem'} />}
                                id='basic-nav-dropdown'
                            >
                                <Link
                                    role='button'
                                    className='nav-link dropdown-item'
                                    tabIndex='0'
                                    to='/sign'
                                    onClick={(e) => {
                                        dispatch(signUp())
                                        ScrollToTop()
                                    }}
                                >
                                    SignUp
                                </Link>
                                <Link
                                    role='button'
                                    className='nav-link dropdown-item '
                                    tabIndex='0'
                                    to='/sign'
                                    onClick={(e) => {
                                        dispatch(signIn())
                                        ScrollToTop()
                                    }}
                                >
                                    SignIn
                                </Link>
                            </NavDropdown>
                        </>
                    )}
                </div>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
            </Container>
        </Navbar>
    )
}

export default Navigation
