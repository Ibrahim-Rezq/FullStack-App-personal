import React from 'react'
import Hero from './Hero'
import Contact from './Contact'
import Projects from './Projects'
// import LoginForm from './LoginForm'
// import RegisterForm from './RegisterForm'
import Posts from './Posts'
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
