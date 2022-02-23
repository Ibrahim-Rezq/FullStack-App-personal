import {
  ADD_COMMENT,
  CLOSE_MODAL,
  REMOVE_ITEM,
  NO_VALUE,
  ADD_POST,
  LIKE_POST,
  DELET_POST,
  SIGN_IN,
  SIGN_UP,
  DELETE_COMMENT,
} from './const';

export const addComment = (comment) => {
  return {
    type: ADD_COMMENT,
    payload: comment,
  };
};
export const deleteComment = (id) => {
  return {
    type: DELETE_COMMENT,
    payload: id,
  };
};
export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  };
};
export const removeItem = (item) => {
  return {
    type: REMOVE_ITEM,
    payload: item,
  };
};
export const noValue = (item) => {
  return {
    type: NO_VALUE,
  };
};
export const signIn = (item) => {
  return {
    type: SIGN_IN,
  };
};
export const signUp = (item) => {
  return {
    type: SIGN_IN,
  };
};
