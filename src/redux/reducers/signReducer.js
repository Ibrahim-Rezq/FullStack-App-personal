import { act } from 'react-dom/cjs/react-dom-test-utils.production.min'
import { SIGN_IN, SIGN_UP } from '../actions/const'

export const signReducer = (
    state = {
        isSigndIn: false,
        name: 'guest',
        isSigningIn: false,
        isSigningUp: false,
    },
    action
) => {
    console.log(action)
    switch (action.type) {
        case SIGN_IN:
            return { ...state, isSigningIn: true, isSigningUp: false }
        case SIGN_UP:
            return { ...state, isSigningIn: false, isSigningUp: true }
            break
        default:
            return state
    }
}
export default signReducer
