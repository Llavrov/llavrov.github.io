import {combineReducers } from 'redux';
import filters from './filters';
import winners from './winners';

const rootReducer = combineReducers({
    filter: filters,
    winners: winners,
});

export default rootReducer;