import { CLOSE_MODAL, NO_VALUE } from '../actions/const';
const modalReducer = (
  state = { isModalOpen: false, modalContent: 'Error No Text' },
  action
) => {
  switch (action.type) {
    case CLOSE_MODAL:
      return { isModalOpen: false, modalContent: '' };
    case NO_VALUE:
      return { isModalOpen: true, modalContent: 'No Value Provided' };
    default:
      return state;
  }
};
export default modalReducer;
