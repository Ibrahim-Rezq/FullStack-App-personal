import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin } from 'react-icons/fi'

function Hero() {
    return (
        <>
            <section id='Hero'>
                <div className='container'>
                    <motion.div
                        initial={{
                            scale: 0,
                            rotateZ: 360,
                        }}
                        animate={{ scale: 1, rotateZ: 0 }}
                        transition={{
                            delay: 0.2,
                            duration: 0.3,
                            type: 'spring',
                            stiffness: 100,
                        }}
                        className='Hero-Text '
                    >
                        <h1 className=''>
                            Hi I'm <br /> <span className=''>Ibrahim Amin</span>
                        </h1>
                        <p className=''>
                            I'm a{' '}
                            <span className=''>Passionate Web Developer</span>{' '}
                            who uses the sorcery of code to create Amazing
                            Websites, Always eager to learn new skills and
                            master already acquired ones, love To write stories,
                            make/play games in my spare time
                        </p>
                        <button className='btn'>Contact Me</button>
                        {/* <ul>
              <li>
                <a>
                  <FiGithub />
                </a>
              </li>
              <li>
                <a>
                  <FiLinkedin />
                </a>
              </li>
            </ul> */}
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default Hero
