import React from 'react';
import { Link } from 'react-router-dom';

class VideoShow extends React.Component {

componentDidMount() {
    this.props.fetchVideo(this.props.videoId)
}    

render(){
        return (
            <div>
            <h1>{this.props.videos.videoId.title}</h1>
            </div>
        )

    }

}
export default VideoShow;