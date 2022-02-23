import { useRef } from 'react';
import { motion } from 'framer-motion';
import useOnScreen from '../../util/useOnScreen';
import { postData } from '../../util/data';
import { BsHandThumbsUpFill, BsEyeFill } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import CommentForm from './Comment/CommentForm';
import Comments from './Comment/Comments';

const PostPage = () => {
  const { postId } = useParams();
  const { id, title, content, auther, updated, categories, vewis, likes } =
    postData.filter((post) => {
      return post.id == postId;
    })[0];
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  return (
    <>
      <Container>
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
          className='Post py-2 px-3 rounded  m-2 '>
          <div className='Post-Head'>
            <h4 className='display-5 fw-bold'>{title}</h4>
            <div className='Post-Head-Sub d-flex'>
              <p className='lead fs-6 ms-4  '>
                By: <span className='pb-1 px-2 rounded'>{auther}</span>
              </p>
              <ul className='list-unstyled d-flex'>
                {categories.map((tag, i) => {
                  return (
                    <li key={i} className='mx-1'>
                      <a href='' className='text-capitalize'>
                        {tag}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className='Post-Body'>
            <p className='fw-bold fs-5'>{content}</p>
          </div>
          <div className='Post-Footer'>
            <div>
              <span className='px-2'>
                <BsHandThumbsUpFill className='pb-1 fs-5' />
                {likes}
              </span>
              <span className='px-2'>
                <BsEyeFill className='pb-1 fs-5' />
                {vewis}
              </span>
            </div>
            <div>
              <span className='px-2'>Last Update: {updated}</span>
            </div>
          </div>
        </motion.div>
        <section>
          <CommentForm postId={id} />
          <Comments postId={id} />
        </section>
      </Container>
    </>
  );
};

export default PostPage;
