import { combineReducers } from 'redux';
import app from './appReducers';

const rootReducers = combineReducers({
    app,
});

export default rootReducers;