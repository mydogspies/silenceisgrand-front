const INITIAL_STATE = {
    currentScrollEvent: null,
    currentVisibleComponent: null
}

const eventsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_SCROLL_EVENT':
            return {
                ...state,
                currentScrollEvent: action.payload
            }
        case 'SET_CURRENT_VISIBLE_COMPONENT':
            return {
                ...state,
                currentVisibleComponent: action.payload
            }
        default:
            return state;
    }
}

export default eventsReducer;
