import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '../../redux/actions/actionCreator';
import { motion } from 'framer-motion';
import { AiFillCloseCircle, AiOutlineBars } from 'react-icons/ai';

const Navigation = () => {
  const signState = useSelector((state) => state.sign);
  const dispatch = useDispatch();
  const location = useLocation();
  const [path, setPath] = useState(location.pathname);
  const [isNavToggeled, setIsNavToggeled] = useState(false);

  useEffect(() => {
    setPath(location.pathname);
    ScrollToTop();
    isNavToggeled === true && handelNavToggel();
  }, [location]);

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
  };

  const ScrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handelNavToggel = () => {
    setIsNavToggeled(!isNavToggeled);
  };

  return (
    <nav id='NavBar'>
      <div className='container'>
        <Link className='navbar-brand' to='/'>
          I_R
        </Link>
        <NavBar
          Scroll={Scroll}
          signState={signState}
          dispatch={dispatch}
          path={path}
          isNavToggeled={isNavToggeled}
          handelNavToggel={handelNavToggel}
        />
        <button
          className='btn'
          onClick={() => {
            handelNavToggel();
          }}>
          <AiOutlineBars />
        </button>
      </div>
    </nav>
  );
};

export const NavBar = ({
  Scroll,
  signState,
  dispatch,
  path,
  isNavToggeled,
  handelNavToggel,
}) => {
  {
    return (
      <motion.ul
        className='navbar-nav'
        initial={{
          x: '-100%',
        }}
        animate={{ x: isNavToggeled ? 0 : '-100%' }}
        transition={{
          duration: 0.3,
          type: 'tween',
        }}>
        <button
          className='btn'
          onClick={() => {
            handelNavToggel();
          }}>
          <AiFillCloseCircle />
        </button>
        <RouteLink name={'Home'} />
        <RouteLink name={'Blog'} />
        <RouteLink name={'About'} />
        {path !== '/' || (
          <>
            <PageLink name={'Projects'} Scroll={Scroll} />
            <PageLink name={'Posts'} Scroll={Scroll} />
            <PageLink name={'Contact'} Scroll={Scroll} />
          </>
        )}
        <li className='account-nav'>
          {(signState.isSigndIn && (
            <p>
              Welcome {signState.userName}!{' '}
              <a
                role='button'
                tabIndex='0'
                onClick={() => {
                  dispatch(signOut());
                }}>
                SignOut
              </a>
            </p>
          )) || (
            <>
              <ul>
                <RouteLink name={'Login'} />
                <RouteLink name={'Register'} />
              </ul>
            </>
          )}
        </li>
      </motion.ul>
    );
  }
};
export const PageLink = ({ name, Scroll }) => {
  return (
    <>
      <li>
        <a
          role='button'
          className='nav-link'
          tabIndex='0'
          href={'#' + name}
          onClick={Scroll}>
          {name}
        </a>
      </li>
    </>
  );
};
export const RouteLink = ({ name }) => {
  return (
    <>
      <li>
        <Link
          role='button'
          className='nav-link'
          tabIndex='0'
          to={'/' + (name == 'Home' ? '' : name)}>
          {name}
        </Link>
      </li>
    </>
  );
};

export default Navigation;
