import { connect } from 'react-redux';
import VideoShow from './video_show'
import { fetchVideos, fetchVideo } from '../../actions/video_actions';

const mSTP = (state, ownProps) => ({
    video: state.videos[ownProps.match.params.videoId],
})

const mDTP = dispatch => ({
    fetchVideo: (id) => dispatch(fetchVideo(id)),
})

export default connect(mSTP, mDTP)(VideoShow)