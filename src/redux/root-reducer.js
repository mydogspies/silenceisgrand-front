import {combineReducers} from 'redux';

import stylesReducer from "./styles/styles.reducer";

export default combineReducers({
    styles: stylesReducer
})
