import { combineReducers } from 'redux';

import entities from './entities_reducer';
import videos from './videos_reducer'
import session from './session_reducer';
import errors from './errors_reducers'


const rootReducer = combineReducers({
    entities,
    session,
    errors,
    videos,
});

export default rootReducer;
