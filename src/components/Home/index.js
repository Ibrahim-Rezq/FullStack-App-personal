import React from 'react'
import Hero from './Hero'
import Contact from '../Contact/'
import Projects from '../Projects'
import Posts from '../Blog/Posts'
import postData from '../../util/data'

const Home = () => {
    return (
        <>
            {/* <LoginForm></LoginForm> */}
            {/* <RegisterForm></RegisterForm> */}
            <Hero />
            <Projects />
            <Posts postData={postData} />
            <Contact />
        </>
    )
}

export default Home
