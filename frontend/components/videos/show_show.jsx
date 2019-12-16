import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from "../greeting/greeting_container";

class ShowShow extends React.Component {

    componentDidMount() {
        this.props.fetchVideo(this.props.videoId)
    }

    render() {
        if (this.props.location.pathname === "/videos/1") {
          return (
            <div>
              <GreetingContainer />
              <div className="show">
                <div>
                  <video
                    className="show"
                    autoPlay
                    controls
                    src="https://onebucketman-seed.s3-us-west-1.amazonaws.com/Saitama+vs+Boros+Full+Fight+(60fps)+(1080p_60fps_H264-128kbit_AAC).mp4"
                  ></video>
                </div>
              </div>
            </div>
          );
        } else if (this.props.location.pathname === "/videos/2") {
          return (
            <div>
              <GreetingContainer />
              <div className="show">
                <video
                  className="show"
                  autoPlay
                  controls
                  src="https://onebucketman-seed.s3-us-west-1.amazonaws.com/HD%3APoke%CC%81mon+(Opening+1)+_+%5BRemastered%5D+1080p+HD+(1080p_30fps_H264-128kbit_AAC).mp4"
                ></video>
              </div>
            </div>
          );
        } else if (this.props.location.pathname === "/videos/3") {
          return (
            <div>
              <GreetingContainer />
              <div className="show">
                <video
                  className="show"
                  autoPlay
                  controls
                  src="https://onebucketman-seed.s3-us-west-1.amazonaws.com/Hunter+X+Hunter+-+Opening+1+_+Departure!+(1080p_24fps_H264-128kbit_AAC).mp4"
                ></video>
              </div>
            </div>
          );
        } else if (this.props.location.pathname === "/videos/4") {
          return (
            <div>
              <GreetingContainer />
              <div className="show">
                <video
                  className="show"
                  autoPlay
                  controls
                  src="https://onebucketman-seed.s3-us-west-1.amazonaws.com/My+Hero+Academia+-+Opening+2+_+Peace+Sign+(1080p_24fps_H264-128kbit_AAC).mp4"
                ></video>
              </div>
            </div>
          );
        } else if (this.props.location.pathname === "/videos/5") {
          return (
            <div>
              <GreetingContainer />
              <div className="show">
                <video
                  className="show"
                  autoPlay
                  controls
                  src="https://onebucketman-seed.s3-us-west-1.amazonaws.com/Cowboy+Bebop+Opening+1080p+-+Creditless+(1080p_24fps_H264-128kbit_AAC).mp4"
                ></video>
              </div>
            </div>
          );
        } else if (this.props.location.pathname === "/videos/6") {
          return (
            <div>
              <GreetingContainer />
              <div className="show">
                <video
                  className="show"
                  autoPlay
                  controls
                  src="https://onebucketman-seed.s3-us-west-1.amazonaws.com/Gintama+Opening+1+_+Pray+(HD)+(1080p_24fps_H264-128kbit_AAC).mp4"
                ></video>
              </div>
            </div>
          );
        }
}

}
export default ShowShow;