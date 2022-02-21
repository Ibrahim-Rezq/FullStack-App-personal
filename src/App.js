import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Navigation from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Blog from './components/Blog'
import Footer from './components/Footer'
import Sign from './components/Sign'

function App() {
    return (
        <div className='App text-light'>
            <Router>
                <Navigation />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/blog' element={<Blog />} />
                    <Route path='/sign' element={<Sign />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    )
}

export default App
