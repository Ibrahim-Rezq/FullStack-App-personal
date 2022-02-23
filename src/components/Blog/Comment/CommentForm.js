import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';
import Modal from '../../../util/Modal';
import { useSelector, useDispatch } from 'react-redux';
import {
  addComment,
  closeModal,
  noValue,
} from '../../../redux/actions/actionCreator';

const CommentForm = ({ postId }) => {
  const modal = useSelector((state) => state.modal);
  const sign = useSelector((state) => state.sign);
  const dispatch = useDispatch();
  const [comment, setComment] = useState({
    id: '',
    postId: '',
    commenterId: '',
    commentContent: '',
  });

  const handleChange = (e) => {
    const d = new Date();
    setComment({
      id: d.getTime().toString(),
      postId: postId,
      commenterId: sign.name,
      commentContent: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (sign.isSigndIn && comment.commentContent) {
      const newComment = { ...comment };
      console.log(newComment);
      setComment({ postId: '', commenterId: '', commentContent: '' });
      dispatch(addComment(newComment));
    } else {
      dispatch(noValue());
    }
  };

  return (
    <>
      {!sign.isSigndIn ? (
        <p>
          Plese sign in to leave a comment <Link to='/login'>LogIn</Link>
        </p>
      ) : (
        <>
          {modal.isModalOpen && (
            <Modal
              modalContent={modal.modalContent}
              closeModal={() => {
                dispatch(closeModal());
              }}
            />
          )}
          <Form className=' p-4 w-100 rounded w-75'>
            <Form.Group className='mb-3' controlId='formText'>
              <Form.Label>Comment :</Form.Label>
              <Form.Control
                as='textarea'
                style={{ height: '100px' }}
                name='message'
                value={comment.commentContent}
                onChange={handleChange}
              />
            </Form.Group>
            <Button onClick={handleSubmit} variant='primary' type='submit'>
              Comment
            </Button>
          </Form>
        </>
      )}
    </>
  );
};
export default CommentForm;
