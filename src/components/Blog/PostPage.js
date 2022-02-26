import { useRef } from 'react'
import { motion } from 'framer-motion'
import useOnScreen from '../../util/useOnScreen'
import { postData } from '../../util/data'
import { BsHandThumbsUpFill, BsEyeFill } from 'react-icons/bs'
import { useParams } from 'react-router-dom'
import CommentForm from './Comment/CommentForm'
import Comments from './Comment/Comments'

const PostPage = () => {
    const { postId } = useParams()
    const { id, title, content, auther, updated, categories, vewis, likes } =
        postData.filter((post) => {
            return post.id == postId
        })[0]
    const ref = useRef()
    const isVisible = useOnScreen(ref)
    return (
        <>
            <section className='container'>
                <motion.div
                    layout
                    ref={ref}
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: isVisible ? 1 : 0,
                    }}
                    exit={{ opacity: 0 }}
                    transition={{
                        delay: 0.2,
                        duration: 0.7,
                        type: 'spring',
                        stiffness: 100,
                    }}
                    className='post'
                >
                    <div className='post-head'>
                        <h4 className=''>{title}</h4>
                        <div className=''>
                            <p className=''>
                                By: <span className=''>{auther}</span>
                            </p>
                            <ul className=''>
                                {categories.map((tag, i) => {
                                    return (
                                        <li key={i} className=''>
                                            <a href='' className=''>
                                                {tag}
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className='post-body'>
                        <p className=''>{content}</p>
                    </div>
                    <div className='post-footer'>
                        <div>
                            <span className=''>
                                <BsHandThumbsUpFill />
                                {likes}
                            </span>
                            <span className=''>
                                <BsEyeFill />
                                {vewis}
                            </span>
                        </div>
                        <div>
                            <span>Last Update: {updated}</span>
                        </div>
                    </div>
                </motion.div>
                <section>
                    <CommentForm postId={id} />
                    <Comments postId={id} />
                </section>
            </section>
        </>
    )
}

export default PostPage
