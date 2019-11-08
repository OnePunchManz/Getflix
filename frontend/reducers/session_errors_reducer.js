import {
    RECEIVE__ERRORS,
    RECEIVE_CURRENT_USER,
} from '../actions/session_actions';

const sessionErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE__ERRORS:
            return action.errors;
        case RECEIVE_CURRENT_USER:
            return [];
        default:
            return state;
    }
};

export default sessionErrorsReducer;
