
import { connect } from "react-redux";
import WeebPage from "./weeb";
import { fetchVideos, fetchVideo } from "../../actions/video_actions";

const mSTP = state => ({
  user: state.user,
  videos: Object.values(state.videos)
});

const mDTP = dispatch => ({
  fetchVideo: id => dispatch(fetchVideo(id)),
  fetchVideos: () => dispatch(fetchVideos())
});

export default connect(mSTP, mDTP)(WeebPage);