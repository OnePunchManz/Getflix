import React from 'react';
import GreetingContainer from '../greeting/greeting_container'
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import ReactPlayer from "react-player";



class BrowsePage extends React.Component {
  constructor(props) {
    super(props);
    this.next1 = this.next1.bind(this);
    this.previous1 = this.previous1.bind(this);
    this.next2 = this.next2.bind(this);
    this.previous2 = this.previous2.bind(this);
    this.state = {
      hover: true,
      muted: true,
      delay: false
    };
    // this.handleMute = this.handleMute.bind(this);
    // this.muter = this.muter.bind(this);
  }

  next1() {
    this.slider1.slickNext();
  }
  previous1() {
    this.slider1.slickPrev();
  }

  next2() {
    this.slider2.slickNext();
  }
  previous2() {
    this.slider2.slickPrev();
  }

  componentDidMount() {
    this.props.fetchVideos();
    this.props.fetchVideo();
  }

  handleMute(e) {
    if (this.state.muted === true) {
      this.setState({ muted: false });
    } else {
      this.setState({ muted: true });
    }
  }

  muter() {
    if (this.state.muted === true) {
      muteButton = (
        <div className="muteButton" onClick={this.handleMute}>
          <img className="volumeMute" src="./volume-off-indicator.png" alt="" />
        </div>
      );
    } else {
      muteButton = (
        <div className="muteButton" onClick={this.handleMute}>
          <img className="volumeMute" src="./volume-off-indicator.png" alt="" />
        </div>
      );
    }

    return muteButton;
  }

  render() {
    var settings = {
      infinite: true,
      speed: 500,
      slidesToScroll: 4,
      slidesToShow: 6,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 240,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <div className="daddyDiv">
        <div className="mainerDiv">
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
          <GreetingContainer />
          <div className="mainBrowseDiv">
            <div className="mainvideo">
              {/* <ReactPlayer
                className="myVideo"
                width="100%"
                height="100%"
                loop={true}
                url={`./onepunch.mp4`}
                muted={this.state.muted}
                playing={true}
              /> */}
              <video
                id="myVideo"
                src="./onepunch.mp4"
                autoPlay
                controls
                muted
              ></video>

              <div className="buttonPrime">
                <img className="browse-logo" src="/onepunchlogo.png" alt="" />
                <button className="browse-buttons">
                  <div className="browse-buttons-container">
                    <Link id="onep" to={`/videos/1`}>
                      Play
                    </Link>
                  </div>
                </button>
                <button className="browse-buttons-2">
                  <div className="browse-buttons-container">+ My List</div>
                </button>
                <button className="browse-buttons-3">
                  <div className="browse-buttons-container">More Info</div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="header">
          <label htmlFor="">Shows for Weebs</label>
        </div>
        <div className="movieRow">
          <div className="mainSlider">
            <div className="thumbnailHolder">
              <div>
                <div className="container"></div>

                <Slider
                  ref={c => (this.slider1 = c)}
                  {...settings}
                  className="carcar"
                  {...settings}
                >
                  <div className="black">
                    <Link to={`/videos/2`}>
                      <img className="item" src="./pika.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="black">
                    <Link to={`/videos/3`}>
                      <img className="item" src="./hxh1.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="black">
                    <Link to={`/videos/1`}>
                      <img className="item" src="./onepunch.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="black">
                    <Link to={`/videos/4`}>
                      <img className="item" src="./boku.png" alt="" />
                    </Link>
                  </div>
                  <div className="black">
                    <Link to={`/videos/5`}>
                      <img className="item" src="./bebop.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="black">
                    <img className="item" src="./gintama.jpg" alt="" />
                  </div>
                  <div className="black">
                    <Link to={`/videos/1`}>
                      <img className="item" src="./onepunch.jpg" alt="" />
                    </Link>
                  </div>
              
                </Slider>
                <div style={{ textAlign: "center" }}>
                  <button className="btn draw-border" onClick={this.previous1}>
                    Previous
                  </button>
                  <button className="btn draw-border" onClick={this.next1}>
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header">
          <label htmlFor="">Because you watch too much anime...</label>
        </div>
        <div className="movieRow2">
          <div className="mainSlider">
            <div className="thumbnailHolder">
              <div>
                <div className="container"></div>
                <Slider
                  ref={c => (this.slider2 = c)}
                  {...settings}
                  className="carcar"
                  {...settings}
                >
                  <div className="black">
                    <img className="item" src="./saiki.jpeg" alt="" />
                  </div>
                  <div className="black">
                    <img className="item" src="./hxh.jpg" alt="" />
                  </div>
                  <div className="black">
                    <img className="item" src="./demon.jpg" alt="" />
                  </div>
                  <div className="black">
                    <img className="item" src="./mob.jpg" alt="" />
                  </div>
                  <div className="black">
                    <img className="item" src="./aot.jpg" alt="" />
                  </div>
                  <div className="black">
                    <img className="item" src="./one.jpg" alt="" />
                  </div>
                  <div className="black">
                    <img className="item" src="./onepunch.jpg" alt="" />
                  </div>
                  <div className="black">
                    <img className="item" src="./hxh1.jpg" alt="" />
                  </div>
                  <div className="black">
                    <img className="item" src="./onepunch.jpg" alt="" />
                  </div>
                </Slider>
                <div style={{ textAlign: "center" }}>
                  <button className="button" onClick={this.previous2}>
                    Previous
                  </button>
                  <button className="button" onClick={this.next2}>
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BrowsePage;