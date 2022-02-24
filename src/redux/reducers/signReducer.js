import { SIGN_IN, SIGN_OUT, SIGN_UP } from '../actions/const';
import { setMockUsers } from '../actions/actionCreator';

const defaultState = {
  isSigndIn: false,
  userName: 'guest',
  mockusers: [],
};
export const signReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isSigndIn: true,
        userName: action.payload.userName,
      };
    case SIGN_UP:
      const tempMockUsers = [...state.mockusers, action.payload];
      setMockUsers(tempMockUsers);
      return {
        ...state,
        mockusers: tempMockUsers,
      };

    case SIGN_OUT:
      return defaultState;
    default:
      return state;
  }
};
export default signReducer;
