import React from 'react'
import Hero from './Hero'
import Contact from '../Contact/'
import Projects from '../Projects'
import Posts from '../Blog/Posts'
const Home = () => {
    return (
        <>
            {/* <LoginForm></LoginForm> */}
            {/* <RegisterForm></RegisterForm> */}
            <Hero />
            <Projects />
            <Posts />
            <Contact />
        </>
    )
}

export default Home
