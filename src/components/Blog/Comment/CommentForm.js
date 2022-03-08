import { useState } from 'react';
import { Link } from 'react-router-dom';
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
      commenterId: sign.userName,
      commentContent: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (sign.isSigndIn && comment.commentContent) {
      const newComment = { ...comment };
      setComment({ postId: '', commenterId: '', commentContent: '' });
      dispatch(addComment(newComment));
    } else {
      dispatch(noValue());
    }
  };

  return (
    <section id='CommentForm'>
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
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}>
            <section className='Form-Group' controlId='formComment'>
              <label>Comment :</label>
              <textarea
                className='Form-Control'
                name='comment'
                value={comment.commentContent}
                onChange={handleChange}
              />
            </section>
            <button onClick={handleSubmit} className='btn' type='submit'>
              Comment
            </button>
          </form>
        </>
      )}
    </section>
  );
};
export default CommentForm;
