import { SIGN_IN, SIGN_OUT } from '../actions/const';

export const signReducer = (
  state = {
    isSigndIn: true,
    name: 'guest',
    isAdmin: false,
  },
  action
) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isSigndIn: true,
        name: action.payload.name,
        isAdmin: action.payload.isAdmin,
      };
    case SIGN_OUT:
      return { ...state, isSigndIn: false, name: 'guest', isAdmin: false };
    default:
      return state;
  }
};
export default signReducer;
