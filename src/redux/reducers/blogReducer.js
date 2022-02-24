import { DELETE_COMMENT, ADD_COMMENT } from '../actions/const';
import { postData, comments } from '../../util/data';
const blogReduer = (state = { postData, comments }, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      const newComments = state.comments;
      newComments.push(action.payload);
      return { ...state, comments: newComments };
    case DELETE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter((comment) => {
          return comment.id !== action.payload;
        }),
      };
    default:
      return state;
  }
};
export default blogReduer;
