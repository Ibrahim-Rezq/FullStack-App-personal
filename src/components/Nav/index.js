import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Navbar, NavLink, Nav, Container, NavDropdown } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { signOut } from '../../redux/actions/actionCreator'
import { BsPersonCircle } from 'react-icons/bs'

const Navigation = () => {
    const signState = useSelector((state) => state.sign)
    const dispatch = useDispatch()
    const location = useLocation()
    const [path, setPath] = useState(location.pathname)

    useEffect(() => {
        setPath(location.pathname)
        ScrollToTop()
    }, [location])

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
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='m-auto'>
                        <RouteLink name={'home'} isDropDown={false} />
                        <RouteLink name={'blog'} isDropDown={false} />
                        <RouteLink name={'about'} isDropDown={false} />
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
                    {(signState.isSigndIn && (
                        <Navbar.Text>
                            Signed in as: {signState.userName}{' '}
                            <NavLink
                                role='button'
                                className='nav-link'
                                tabIndex='0'
                                onClick={() => {
                                    dispatch(signOut())
                                }}
                            >
                                signOut
                            </NavLink>
                        </Navbar.Text>
                    )) || (
                        <>
                            <NavDropdown
                                title={<BsPersonCircle fontSize={'1.2rem'} />}
                                id='basic-nav-dropdown'
                            >
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
    )
}

export const PageLink = ({ name, Scroll }) => {
    return (
        <>
            <NavLink
                role='button'
                className='nav-link'
                tabIndex='0'
                href={'#' + name}
                onClick={Scroll}
            >
                {name}
            </NavLink>
        </>
    )
}
export const RouteLink = ({ name, isDropDown }) => {
    return (
        <>
            <Link
                role='button'
                className={
                    'nav-link text-capitalize' +
                    (isDropDown ? ' dropdown-item' : '')
                }
                tabIndex='0'
                to={'/' + (name == 'home' ? '' : name)}
            >
                {name}
            </Link>
        </>
    )
}

export default Navigation
