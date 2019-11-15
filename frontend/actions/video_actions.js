import * as APIUtil from '../util/video_api_util';

export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';
export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';

export const receiveVideos = videos => ({
    type: RECEIVE_VIDEOS,
    videos,
});

export const receiveVideo = ({ title }) => ({
    type: RECEIVE_VIDEO,
    title,
});

export const fetchVideos = () => dispatch => (
    APIUtil.fetchVideos().then(vidoes => (
        dispatch(receiveVideos(vidoes))
    ))
);

export const fetchVideo = id => dispatch => (
    APIUtil.fetchVideo(id).then(payload => (
        dispatch(receiveVideo(payload))
    ))
);
