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
        default:
            return state;
    }
}

export default stylesReducer;
