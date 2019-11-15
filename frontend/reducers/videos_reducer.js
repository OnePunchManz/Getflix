
import {
    RECEIVE_VIDEOS,
    RECEIVE_VIDEO
} from '../actions/video_actions';


const videosReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_VIDEOS:
            return action.videos;
        case RECEIVE_VIDEO:
            const newVideo = { [action.video.id]: action.video };
            return Object.assign({}, state, newVideo);
        default:
            return state;
    }
};

export default videosReducer;
