import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import Post from './Post'
import { FcSearch } from 'react-icons/fc'
import { motion, AnimatePresence } from 'framer-motion'

function Posts({ postData, bgColor, search }) {
    const [fillteredData, setFillteredData] = useState(postData)
    const [keyWord, setKeyWord] = useState('')
    const handelFiltter = (e) => {
        e.preventDefault()
        setKeyWord(e.target.value)
        setFillteredData(
            postData.filter((post) => {
                return (
                    post.summary.toLowerCase().includes(keyWord) ||
                    post.title.toLowerCase().includes(keyWord)
                )
            })
        )
        setKeyWord(e.target.value)
    }
    return (
        <>
            {search && (
                <Form className='bg-dark'>
                    <Form.Group className='d-flex' controlId='formSearch'>
                        <Form.Label>
                            <FcSearch style={{ fontSize: '2rem' }} />
                        </Form.Label>
                        <Form.Control
                            type='search'
                            name='search'
                            onChange={handelFiltter}
                            tabIndex='0'
                            className='ms-2'
                        />
                    </Form.Group>
                </Form>
            )}
            <div id='Posts' className={`bg-${bgColor || 'main'} d-flex d-f`}>
                <motion.div
                    layout
                    className='d-flex d-f flex-wrap p-3 h-100 container'
                >
                    <AnimatePresence>
                        {fillteredData.length > 0 ? (
                            fillteredData.map((post, i) => {
                                return <Post key={post.id} postData={post} />
                            })
                        ) : (
                            <p className='display-3 text-center'>
                                No Posts Match The Search
                                <br />
                                {'{ ' + keyWord + ' }'}
                            </p>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </>
    )
}

export default Posts
