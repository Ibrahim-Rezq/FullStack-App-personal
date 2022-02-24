import { SIGN_IN, SIGN_OUT } from '../actions/const'

const defaultState = {
    isSigndIn: false,
    username: 'guest',
}
export const signReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SIGN_IN:
            console.log(action.payload.username)
            return {
                ...state,
                isSigndIn: true,
                username: action.payload.username,
            }
        case SIGN_OUT:
            return defaultState
        default:
            return state
    }
}
export default signReducer
