import React from 'react';
import GreetingContainer from '../greeting/greeting_container'
import Slider from "react-slick";


class BrowsePage extends React.Component {



    render(){
       
        var settings = {
            infinite: true,
            speed: 500,
            slidesToScroll: 4,
            slidesToShow: 6,
            
        };
        
        return(
          
            <div className="mainerDiv">
                < link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" /> 
                <GreetingContainer /> 
                <div className="mainBrowseDiv">
                <div className="mainvideo">
                {/* <iframe className="Video"  src="https://www.youtube.com/embed/atxYe-nOa9w?controls=0&amp;start=42" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" width="560" height="760"></iframe> */}
                        <video id="myVideo" src="./myhero.mp4" ></video>
                        {/* aws src="https://onebucketman-seed.s3-us-west-1.amazonaws.com/My+Hero+Academia+-+Opening+2+_+Peace+Sign+(1080p_24fps_H264-128kbit_AAC).mp4" */}

                        {/* <video src="https://onebucketman.s3-us-west-1.amazonaws.com/My+Hero+Academia+-+Opening+2+_+Peace+Sign+(1080p_24fps_H264-128kbit_AAC).mp4" width="250px" height="250px"></video> */}

               
                <div className="buttonPrime">
                
                <button className="browse-buttons"> Play</button>
                <button className="browse-buttons-2"> + My List</button>
                <button className="browse-buttons-3"> More Info</button>
                 </div>
                </div>
            </div>
             <div className="movieRow">
                    <div className="mainSlider" >
                    <div className="thumbnailHolder">
                        <div className="header">
                            <label htmlFor="">
                                Title Header
                            </label>
                        </div> 
                         <div>
                          
                            <Slider className="carcar"{...settings}>
                            <div  >
                            <img  src="./onepunch.jpg"   alt=""/>
                            </div>
                                <div >
                                    <img class="item" src="./onepunch.jpg"  alt="" />
                                </div>
                                <div  >
                                        <img class="item"src="./onepunch.jpg"  alt="" />
                                </div>
                                <div  >
                                        <img class="item"src="./onepunch.jpg"  alt="" />
                                </div>
                                <div >
                                        <img class="item"src="./onepunch.jpg"  alt="" />
                                </div>
                                <div >
                                        <img class="item"src="./onepunch.jpg"  alt="" />
                            </div>
                                <div >
                                        <img class="item"src="./onepunch.jpg"  alt="" />
                            </div>
                            <div>
                                        <img class="item"src="./onepunch.jpg"  alt="" />
                            </div>
                            <div>
                                        <img class="item"src="./onepunch.jpg"  alt="" />
                            </div>
                            <div>
                                        <img class="item"src="./onepunch.jpg"  alt="" />
                            </div>
                        </Slider>
                      
                            </div>
                    
                            </div>
                   
                 </div>
            </div>
            </div>
        )
    }
}

export default BrowsePage;