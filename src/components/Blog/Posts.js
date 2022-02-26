import { useState, useEffect } from 'react';
import Post from './Post';
import { FcSearch } from 'react-icons/fc';
import { motion, AnimatePresence } from 'framer-motion';

function Posts({ postData, bgColor, search }) {
  const [fillteredData, setFillteredData] = useState(postData);
  const [searchKeyWord, setSearchKeyWord] = useState(' ');
  const [categorie, setCategorie] = useState('All');
  useEffect(() => {
    setFillteredData(fillterData(postData));
  }, [searchKeyWord, categorie]);

  const fillterData = (postData) => {
    return postData.filter((post) => {
      return (
        (post.summary.toLowerCase().includes(searchKeyWord) ||
          post.title.toLowerCase().includes(searchKeyWord)) &&
        (categorie === 'All' ? true : post.categories.includes(categorie))
      );
    });
  };

  const handelFiltterBySearch = (e) => {
    e.preventDefault();
    setSearchKeyWord(e.target.value);
  };
  const handelFiltterByCategorie = (e) => {
    e.preventDefault();
    setCategorie(e.target.value);
  };
  return (
    <>
      {search && (
        <FilterForm
          handelFiltterBySearch={handelFiltterBySearch}
          handelFiltterByCategorie={handelFiltterByCategorie}
        />
      )}
      <section id='Posts'>
        <motion.div layout className='container'>
          <AnimatePresence>
            {fillteredData.length > 0 ? (
              fillteredData.map((post, i) => {
                return <Post key={post.id} postData={post} />;
              })
            ) : (
              <p className='display-3 text-center'>
                No Posts Match The Search
                <br />
                {'{ ' + searchKeyWord + ' }'}
                <br />
                {categorie === 'All' || 'or categorie { ' + categorie + ' }'}
              </p>
            )}
          </AnimatePresence>
        </motion.div>
      </section>
    </>
  );
}

export const FilterForm = ({
  handelFiltterBySearch,
  handelFiltterByCategorie,
}) => {
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}>
        <div className='container'>
          <div className='Form-Group Group-Head'>
            <div className='Form-Group'>
              <label className='search-lable'>
                <FcSearch />
              </label>
              <input
                className='Form-Control'
                type='search'
                name='search'
                onChange={handelFiltterBySearch}
                tabIndex='0'
              />
            </div>
            <div className='Form-Group'>
              <label>Search By categorie: </label>
              <select
                name='select'
                onChange={handelFiltterByCategorie}
                tabIndex='0'
                aria-label='Default select example'>
                <option>All</option>
                <option value='tech'>tech</option>
                <option value='tip'>tip</option>
                <option value='code'>code</option>
                <option value='stories'>stories</option>
                <option value='funnny'>funnny</option>
                <option value='clacky'>clacky</option>
              </select>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Posts;
