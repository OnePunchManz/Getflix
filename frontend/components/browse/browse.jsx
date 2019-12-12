import React from 'react';
import GreetingContainer from '../greeting/greeting_container'
import Slider from "react-slick";
import { Link } from 'react-router-dom';



class BrowsePage extends React.Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  componentDidMount() {
    this.props.fetchVideos();
    this.props.fetchVideo();
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
              <video id="myVideo" src="./onepunch.mp4" autoPlay></video>

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
                  ref={c => (this.slider = c)}
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
                    <img className="item" src="./hxh1.jpg" alt="" />
                  </div>
                  <div className="black">
                    <img className="item" src="./onepunch.jpg" alt="" />
                  </div>
                  <div className="black">
                    <img className="item" src="./boku.png" alt="" />
                  </div>
                  <div className="black">
                    <img className="item" src="./bebop.jpg" alt="" />
                  </div>
                  <div className="black">
                    <img className="item" src="./gintama.jpg" alt="" />
                  </div>
                  <div className="black">
                    <img className="item" src="./onepunch.jpg" alt="" />
                  </div>
                  <div className="black">
                    <img className="item" src="./aot.jpg" alt="" />
                  </div>
                  <div className="black">
                    <img className="item" src="./saiki.jpeg" alt="" />
                  </div>
                </Slider>
                <div style={{ textAlign: "center" }}>
                  <button className="btn draw-border" onClick={this.previous}>
                    Previous
                  </button>
                  <button className="btn draw-border" onClick={this.next}>
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
                  ref={c => (this.slider = c)}
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
                  <button className="button" onClick={this.previous}>
                    Previous
                  </button>
                  <button className="button" onClick={this.next}>
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