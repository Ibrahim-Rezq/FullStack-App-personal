import Comment from './Comment';
import { useSelector, useDispatch } from 'react-redux';
import {
  addComment,
  closeModal,
  deleteComment,
  noValue,
} from '../../../redux/actions/actionCreator';

const Comments = ({ postId }) => {
  const blogState = useSelector((state) => state.blog);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteComment(id));
  };
  return (
    <>
      {blogState.comments
        .filter((comment) => {
          return comment.postId == postId;
        })
        .map((comment, i) => {
          return (
            <Comment handleDelete={handleDelete} key={i} comment={comment} />
          );
        })}
    </>
  );
};

export default Comments;
