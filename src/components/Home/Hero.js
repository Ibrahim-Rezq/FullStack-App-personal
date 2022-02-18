import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { motion } from 'framer-motion'

function Hero() {
    return (
        <>
            <div className='Hero p-5 w-100 '>
                <Container>
                    <motion.div
                        initial={{
                            scale: 0,
                            x: '-50%',
                            y: '-50%',
                            rotateZ: 360,
                        }}
                        animate={{ scale: 1, rotateZ: 0 }}
                        transition={{
                            delay: 0.2,
                            duration: 0.3,
                            type: 'spring',
                            stiffness: 100,
                        }}
                        className='Hero-Text text-center navbar-brand'
                    >
                        <h1 className='display-2 mb-5'>
                            Hi I'm <br />{' '}
                            <span className='text-danger'>Ibrahim Amin</span>
                        </h1>
                        <p className='lead text-wrap mt-5'>
                            I'm a{' '}
                            <span className='text-warning'>
                                Passionate Web Developer
                            </span>{' '}
                            who uses the sorcery of code to create Amazing
                            Websites, Always eager to learn new skills and
                            master already acquired ones, love To write stories,
                            make/play games in my spare time
                        </p>
                        <Button variant='info'>Contact Me</Button>
                    </motion.div>
                </Container>
            </div>
        </>
    )
}

export default Hero
