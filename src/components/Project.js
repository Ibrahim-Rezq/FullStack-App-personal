import React, { useRef } from 'react'
// import PropTypes from 'prop-types'
import { Image } from 'react-bootstrap'
import { motion } from 'framer-motion'
import useOnScreen from '../util/useOnScreen'

function Project({ num, ProjectData }) {
    const { name, desc, tech, image } = ProjectData
    const ref = useRef()
    const isVisible = useOnScreen(ref)
    return (
        <>
            <motion.div
                ref={ref}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{
                    delay: 0.5,
                    duration: 0.3,
                    type: 'spring',
                    stiffness: 100,
                }}
                className={`Project d-flex d-f my-md-3 my-1
                flex-md${num % 2 === 0 ? '-row-reverse' : '-row'} 
                flex-sm-column 
                flex-column-reverse`}
            >
                <motion.div
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
                    className='Project-Data px-3 py-1 rounded'
                >
                    <p className='lead mb-0 fw-normal text-light'>Featured</p>
                    <h4 className='display-5 ms-2 text-capitalize fw-bold'>
                        {name}
                    </h4>
                    <p className='fw-bold'>{desc}</p>
                    <ul>
                        {tech.map((elem, i) => {
                            return (
                                <li key={i} className=' badge bg-info ms-3'>
                                    {elem}
                                </li>
                            )
                        })}
                    </ul>
                </motion.div>
                <div className='Project-Image min-vw-25 w-100'>
                    <div className='overlay' />
                    <a href=''>
                        <Image src={image} alt='' fluid />
                    </a>
                </div>
            </motion.div>
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
