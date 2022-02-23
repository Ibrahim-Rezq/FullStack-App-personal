import React from 'react';
import { Container } from 'react-bootstrap';
import Posts from './Posts';
import { postData } from '../../util/data';

function Blog() {
  return (
    <>
      <div id='Blog' className=' m-5'>
        <Posts postData={postData} bgColor='dark' search={true} />
      </div>
    </>
  );
}

export default Blog;
