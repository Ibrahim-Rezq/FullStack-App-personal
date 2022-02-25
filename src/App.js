import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navigation from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import Blog from './components/Blog';
import PostPage from './components/Blog/PostPage';
import Footer from './components/Footer';
import Login from './components/Sign/Login';
import Register from './components/Sign/Register';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route element={<ProtectedRoute />}>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Route>
          <Route path='/blog/:postId' element={<PostPage />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
