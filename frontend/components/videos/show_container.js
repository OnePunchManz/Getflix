import { connect } from 'react-redux';
import ShowShow from './show_show'
import { fetchVideos, fetchVideo } from '../../actions/video_actions';

const mSTP = (state, ownProps) => ({
    videoId: ownProps.match.params.videoId,
    videos: state.videos,
})

const mDTP = dispatch => ({
    fetchVideo: (id) => dispatch(fetchVideo(id)),
})

export default connect(mSTP, mDTP)(ShowShow)