import React, { useRef } from 'react'
// import PropTypes from 'prop-types'
import { Image } from 'react-bootstrap'
import { motion } from 'framer-motion'
import useOnScreen from '../../util/useOnScreen'

function Project({ num, ProjectData }) {
    const { name, desc, tech, image } = ProjectData
    const ref = useRef()
    const isVisible = useOnScreen(ref)
    return (
        <>
            <motion.article
                ref={ref}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{
                    delay: 0.5,
                    duration: 0.3,
                    type: 'spring',
                    stiffness: 100,
                }}
                className={`Project`}
            >
                <motion.section
                    initial={{ x: num % 2 === 0 ? '100vw' : '-100vw' }}
                    animate={{
                        x: isVisible ? 0 : num % 2 === 0 ? '100vw' : '-100vw',
                    }}
                    transition={{
                        delay: 0.2,
                        duration: 1,
                        type: 'spring',
                        stiffness: 100,
                    }}
                    className='Project-Data '
                >
                    <p className='featured'>Featured</p>
                    <h4>{name}</h4>
                    <p>{desc}</p>
                    <ul className='tech'>
                        {tech.map((elem, i) => {
                            return <li key={i}>{elem}</li>
                        })}
                    </ul>
                </motion.section>
                <section className='Project-Image'>
                    <div className='overlay' />
                    <a href=''>
                        <Image src={image} alt='' fluid />
                    </a>
                </section>
            </motion.article>
        </>
    )
}

// Product.propTypes = {
//     image: PropTypes.object.isRequired,
//     name: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
// }
// Product.defaultProps = {
//   name: 'default name',
//   price: 3.99,
//   image: defaultImage,
// };

export default Project
