import globalStyles from '../../styles/_exports.module.scss';

const INITIAL_STATE = {
    currentBackground: globalStyles.backgroundColorDefault
}

const stylesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_BACKGROUND':
            return {
                ...state,
                currentBackground: action.payload
            }
        case 'SET_CURRENT_TEXTCOLOR':
            return {
                ...state,
                currentTextColor: action.payload
            }
        default:
            return state;
    }
}

export default stylesReducer;
