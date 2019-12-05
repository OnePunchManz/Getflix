import { connect } from 'react-redux';
import BrowsePage from './browse'
import { fetchVideos, fetchVideo } from '../../actions/video_actions';

const mSTP = state => ({
    video: state.video
})

const mDTP = dispatch => ({
    fetchVideo: (id) => dispatch(fetchVideo(id)),
    fetchVideos: () => dispatch(fetchVideos())
})

export default connect(mSTP, mDTP)(VideoShow)