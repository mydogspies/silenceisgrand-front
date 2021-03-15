import { createStore, applyMiddleware } from 'redux';
import {createLogger} from 'redux-logger';
import {makeLogFilter, excludeFilter} from "redux-logger-filter";

import rootReducer from './root-reducer';

import {setCurrentVisibleComponent, setViewHistory} from "./events/events.actions";

const logger = createLogger({
    predicate: makeLogFilter(
        setCurrentVisibleComponent,
        setViewHistory
    )
});

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
