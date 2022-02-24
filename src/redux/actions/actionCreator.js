import {
    ADD_COMMENT,
    CLOSE_MODAL,
    REMOVE_ITEM,
    NO_VALUE,
    SIGN_IN,
    SIGN_UP,
    SIGN_OUT,
    DELETE_COMMENT,
    NON_VAILED_PASSWORD,
} from './const'
import { users } from '../../util/data'

export const addComment = (comment) => {
    return {
        type: ADD_COMMENT,
        payload: comment,
    }
}
export const deleteComment = (id) => {
    return {
        type: DELETE_COMMENT,
        payload: id,
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
export const signOut = (item) => {
    return {
        type: SIGN_OUT,
    }
}
export const signUp = (user) => {
    return {
        type: SIGN_UP,
        payload: user,
    }
}
export const signIn = (userToLogIn) => {
    const getUser = users.filter((user) => {
        return (
            user.email === userToLogIn.email &&
            user.password === userToLogIn.password
        )
    })
    if (getUser.length > 0) {
        return {
            type: SIGN_IN,
            payload: getUser[0],
        }
    } else {
        return {
            type: NON_VAILED_PASSWORD,
        }
    }
}
