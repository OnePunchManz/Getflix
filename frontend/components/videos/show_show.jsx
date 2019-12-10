import React from 'react';
import { Link } from 'react-router-dom';

class ShowShow extends React.Component {

    componentDidMount() {
        this.props.fetchVideo(this.props.videoId)
    }

    render() {
        return (
            <div>
                <div className="show">
                    <video className="show" autoPlay src="https://onebucketman-seed.s3-us-west-1.amazonaws.com/Saitama+vs+Boros+Full+Fight+(60fps)+(1080p_60fps_H264-128kbit_AAC).mp4"  ></video>
                
                </div>
            </div>
        )

    }

}
export default ShowShow;