import { createStore, applyMiddleware } from 'redux';
import {createLogger} from 'redux-logger';
import {makeLogFilter, excludeFilter} from "redux-logger-filter";

import rootReducer from './root-reducer';

import {setScrollEvent, setCurrentVisibleComponent, setViewHistory, popViewHistory} from "./events/events.actions";
import {setCurrentBackground, setCurrentTextColor} from "./styles/styles.actions";

const logger = createLogger({
    predicate: makeLogFilter(
        setCurrentVisibleComponent
    )
});

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
