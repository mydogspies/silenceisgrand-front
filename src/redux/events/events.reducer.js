const INITIAL_STATE = {
    currentScrollEvent: null
}

const eventsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_SCROLL_EVENT':
            return {
                ...state,
                currentScrollEvent: action.payload
            }
        default:
            return state;
    }
}

export default eventsReducer;
