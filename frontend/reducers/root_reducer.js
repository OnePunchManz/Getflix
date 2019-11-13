import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
import sessionErrorsReducer from './session_errors_reducer';
import sessionReducer from './session_reducer';
import usersReducer from './user_reducer';
import errorsReducer from './errors_reducers';

const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    user: usersReducer,
    session_errors: sessionErrorsReducer,
    errors: errorsReducer
});

export default rootReducer;
