import {combineReducers} from 'redux';

import stylesReducer from "./styles/styles.reducer";
import eventsReducer from "./events/events.reducer";

export default combineReducers({
    styles: stylesReducer,
    events: eventsReducer
});
