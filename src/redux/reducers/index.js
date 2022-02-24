import { combineReducers } from 'redux';
import blogReducer from './blogReducer';
import modalReducer from './modalReducer';
import signReducer from './signReducer';

export const rootReducer = combineReducers({
  blog: blogReducer,
  modal: modalReducer,
  sign: signReducer,
});
