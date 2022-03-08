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
      <motion.article
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
        className='post'>
        <section className='post-head'>
          <h4 className=''>{title}</h4>
          <div className=''>
            <p className=''>
              By: <span>{auther}</span>
            </p>
            <ul className=''>
              {categories.map((tag, i) => {
                return (
                  <li key={i} className=''>
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      href=''
                      className=''>
                      {tag}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
        <section className='post-body'>
          <p className=''>
            {summary}
            <Link to={'/blog/' + id} tabIndex='0'>
              ..More
            </Link>
          </p>
        </section>
        <section className='post-footer'>
          <div>
            <span className=''>Last Update: {updated}</span>
          </div>
        </section>
      </motion.article>
    </>
  );
}

export default Post;
