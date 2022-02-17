import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, NavLink, Nav, Container } from 'react-bootstrap'

const Navigation = () => {
    const Scroll = (e) => {
        e.preventDefault()

        const navBar = document.querySelector('#NavBar')
        const navBarHeight = 69
        const target = e.target.getAttribute('href')
        const elem = document.querySelector(target)
        const top = elem.getBoundingClientRect().top + window.scrollY
        console.log(top)
        window.scroll({
            top: top - navBarHeight,
            behavior: 'smooth',
        })
        console.log('navBarHeight')
    }
    const ScrollToTop = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth',
        })
    }
    return (
        <Navbar id='NavBar' bg='dark' variant='dark' sticky='top' expand='md'>
            <Container>
                <Link className='navbar-brand font-monospace fs-3' to='/'>
                    I_R
                </Link>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ms-auto'>
                        <Link
                            role='button'
                            className='nav-link'
                            tabIndex='0'
                            to='/'
                            onClick={ScrollToTop}
                        >
                            Home
                        </Link>
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
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation
