import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import useOnScreen from '../util/useOnScreen'
function PostPage() {
    const ref = useRef()
    const isVisible = useOnScreen(ref)

    return (
        <>
            <motion.div
                ref={ref}
                initial={{ rotateX: 90 }}
                animate={{ rotateX: isVisible ? 0 : 90 }}
                transition={{
                    delay: 0.2,
                    duration: 0.5,
                    type: 'spring',
                    stiffness: 100,
                }}
                className='Post py-2 px-3 rounded  m-2 '
            >
                <div className='Post-Head'>
                    <h4 className='display-5 fw-bold'>
                        Secure a 100 dollar bussnies
                    </h4>
                    <div>
                        <p className='lead fs-5'>By Ibrahim</p>
                        <p>
                            <a href='' className='text-capitalize'>
                                tip
                            </a>{' '}
                            <a href='' className='text-capitalize'>
                                code
                            </a>{' '}
                            <a href='' className='text-capitalize'>
                                help
                            </a>{' '}
                        </p>
                    </div>
                </div>
                <div className='Post-Body'>
                    <p className='fw-bold fs-5'>
                        m a Passses the sorcery of code to create Amazing
                        Websites, Always eager to learn new skills and master
                        already acquired ones, love To write stories, make/play
                        games in my spare time
                        <a
                            role='button'
                            onClick={() => {
                                console.log('hi')
                            }}
                            className='text-info '
                            tabIndex='0'
                        >
                            ..More
                        </a>
                    </p>
                </div>
                <div className='Post-Footer'>
                    <div>
                        <span className='px-2'>34 Like</span>
                        <span className='px-2'>5 Vewis</span>
                    </div>
                    <div>
                        <span className='px-2'>Published 20-1-2020</span>
                        <span className='px-2'>Last Update 20-1-2020</span>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default PostPage
