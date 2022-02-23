import { combineReducers } from 'redux';
import blogReducer from './blogReducer';
import modalReducer from './modalReducer';
import signReducer from './signReducer';
import {
  CLOSE_MODAL,
  REMOVE_ITEM,
  NO_VALUE,
  ADD_POST,
  LIKE_POST,
  DELET_POST,
} from '../actions/const';

export const rootReducer = combineReducers({
  blog: blogReducer,
  modal: modalReducer,
  sign: signReducer,
});
export const reducer = (state, action) => {
  if (action.type === 'NO_VALUE') {
    return {
      ...state,
      isModalOpen: true,
      modalContent: 'Please enter value',
    };
  }
  if (action.type === 'NON_VAILED') {
    return {
      ...state,
      isModalOpen: true,
      modalContent: 'Please enter a vailed Email',
    };
  }
  if (action.type === 'NON_VAILED_PASS') {
    return {
      ...state,
      isModalOpen: true,
      modalContent: `${action.payload}`,
    };
  }
  if (action.type === REMOVE_ITEM) {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    );
    return { ...state, people: newPeople };
  }
  throw new Error('no matching action type');
};
