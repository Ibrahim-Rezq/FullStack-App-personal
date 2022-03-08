import { useSelector } from 'react-redux';

const Comment = ({ comment, handleDelete }) => {
  const { id, commentContent, commenterId } = comment;
  const sign = useSelector((state) => state.sign);

  return (
    <section className='comment'>
      <h4>{commenterId}</h4>
      <div>
        <p>{commentContent}</p>
        {sign.isSigndIn && sign.userName === commenterId && (
          <button
            className='btn'
            onClick={() => {
              handleDelete(id);
            }}>
            delete
          </button>
        )}
      </div>
    </section>
  );
};

export default Comment;
