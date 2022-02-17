export const reducer = (state, action) => {
    const ADD_ITEM = 'ADD_ITEM'
    const CLOSE_MODAL = 'CLOSE_MODAL'
    const REMOVE_ITEM = 'REMOVE_ITEM'
    if (action.type === ADD_ITEM) {
        const newPeople = [...state.people, action.payload]
        return {
            ...state,
            people: newPeople,
            isModalOpen: true,
            modalContent: 'item added',
        }
    }
    if (action.type === 'NO_VALUE') {
        return {
            ...state,
            isModalOpen: true,
            modalContent: 'Please enter value',
        }
    }
    if (action.type === 'NON_VAILED') {
        return {
            ...state,
            isModalOpen: true,
            modalContent: 'Please enter a vailed Email',
        }
    }
    if (action.type === 'NON_VAILED_PASS') {
        return {
            ...state,
            isModalOpen: true,
            modalContent: `${action.payload}`,
        }
    }
    if (action.type === CLOSE_MODAL) {
        return { ...state, isModalOpen: false }
    }
    if (action.type === REMOVE_ITEM) {
        const newPeople = state.people.filter(
            (person) => person.id !== action.payload
        )
        return { ...state, people: newPeople }
    }
    throw new Error('no matching action type')
}
