import {
    ADD_ITEM,
    CLOSE_MODAL,
    REMOVE_ITEM,
    NO_VALUE,
    ADD_POST,
    LIKE_POST,
    DELET_POST,
    SIGN_IN,
    SIGN_UP,
} from './const'

export const addItem = (item) => {
    return {
        type: ADD_ITEM,
        payload: item,
    }
}
export const closeModal = () => {
    return {
        type: CLOSE_MODAL,
    }
}
export const removeItem = (item) => {
    return {
        type: REMOVE_ITEM,
        payload: item,
    }
}
export const noValue = (item) => {
    return {
        type: NO_VALUE,
    }
}
export const signIn = (item) => {
    console.log(SIGN_IN)
    return {
        type: SIGN_IN,
    }
}
export const signUp = (item) => {
    return {
        type: SIGN_UP,
    }
}
