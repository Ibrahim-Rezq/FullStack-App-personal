import { useRef } from 'react';
import { motion } from 'framer-motion';
import useOnScreen from '../../util/useOnScreen';
import { Link } from 'react-router-dom';

function Post({ postData }) {
  const { id, title, summary, auther, updated, categories } = postData;
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  return (
    <>
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
          <p className='fw-bold fs-5'>
            {summary}
            <Link to={'/blog/' + id} tabIndex='0'>
              ..More
            </Link>
          </p>
        </div>
        <div className='Post-Footer'>
          <div>
            <span className='px-2'>Last Update: {updated}</span>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Post;
