import { combineReducers } from 'redux';

import entitiesReducer from './entities_reducer';
import sessionErrorsReducer from './session_errors_reducer';
import sessionReducer from './session_reducer';
import usersReducer from './user_reducer';

const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    user: usersReducer,
    session_errors: sessionErrorsReducer
});

export default rootReducer;
