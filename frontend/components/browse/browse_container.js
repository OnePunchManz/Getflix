import { connect } from 'react-redux';
import BrowsePage from './browse'

const mSTP = state => ({
    user: state.user,
    videos: state.videos
})

const mDTP = dispatch => ({

})

export default connect(mSTP,mDTP)(BrowsePage)