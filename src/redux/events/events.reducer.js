const INITIAL_STATE = {
    currentScrollEvent: null,
    currentVisibleComponent: null,
    viewHistory: []
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
        case 'SET_VIEW_HISTORY':
            return {
                ...state,
                viewHistory: [...state.viewHistory, action.payload]
            }
        case 'POP_VIEW_HISTORY':
            return {
                ...state,
                popViewHistory: [state.viewHistory.filter(view => view !== action.payload)]
            }
        default:
            return state;
    }
}

export default eventsReducer;
