import {
  ADD_COMMENT,
  DELETE_COMMENT,
  CLOSE_MODAL,
  NO_VALUE,
  LIKE_POST,
  SIGN_IN,
  SIGN_OUT,
  SIGN_UP,
  NON_VAILED_PASSWORD,
  NON_VAILED_EMAIL,
  HAS_ACCOUNT,
} from './const';
import { users } from '../../util/data';

let mockUsers = [];

const getAllUsers = () => {
  const allUsers = users;
  allUsers.push(...mockUsers);
  return allUsers;
};
export const setMockUsers = (MockUsers = []) => {
  mockUsers = MockUsers;
};

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
export const noValue = () => {
  return {
    type: NO_VALUE,
  };
};
export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};
export const signUp = (userToSignUp) => {
  const getUser = getAllUsers().filter((user) => {
    return user.email === userToSignUp.email;
  });
  if (getUser.length > 0) {
    return {
      type: HAS_ACCOUNT,
    };
  } else {
    return {
      type: SIGN_UP,
      payload: userToSignUp,
    };
  }
};
export const signIn = (userToLogIn) => {
  const getUser = getAllUsers().filter((user) => {
    return (
      user.email === userToLogIn.email && user.password === userToLogIn.password
    );
  });
  if (getUser.length > 0) {
    return {
      type: SIGN_IN,
      payload: getUser[0],
    };
  } else {
    return {
      type: NON_VAILED_PASSWORD,
    };
  }
};
export const nonVailedEmail = () => {
  return {
    type: NON_VAILED_EMAIL,
  };
};
