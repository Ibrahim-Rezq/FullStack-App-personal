import { ADD_POST, LIKE_POST, DELET_POST } from '../actions/const'
const blogReduer = (state = [], action) => {
    switch (action.type) {
        case ADD_POST:
            console.log(ADD_POST)
            break
        case LIKE_POST:
            console.log(LIKE_POST)
            break
        case DELET_POST:
            console.log(DELET_POST)
            break

        default:
            return state
    }
}
export default blogReduer
