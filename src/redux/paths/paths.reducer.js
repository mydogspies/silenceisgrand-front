const INITIAL_STATE = {
    imagesPath: null
}

const pathsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_IMAGES_PATH':
            return {
                ...state,
                imagesPath: action.payload
            }
        default:
            return state;
    }
};

export default pathsReducer;
