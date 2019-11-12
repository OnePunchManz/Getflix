import React from 'react';
import GreetingContainer from '../greeting/greeting_container'


class BrowsePage extends React.Component {
   

    render(){
        return(
            <div className="mainerDev">
            <div className="mainBrowseDiv">
                <GreetingContainer /> 
                <div className="video">
                {/* <iframe className="mainVideo" width="1600" height="1000" src="https://www.youtube.com/embed/atxYe-nOa9w?controls=0&amp;start=42" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                */}

                        <video src="https://onebucketman.s3-us-west-1.amazonaws.com/My+Hero+Academia+-+Opening+2+_+Peace+Sign+(1080p_24fps_H264-128kbit_AAC).mp4" width="250px" height="250px"></video>

                </div>
                <button className="browse-buttons"> Play</button>
                <button className="browse-buttons-2"> + My List</button>
                <button className="browse-buttons-3"> More Info</button>
            </div>
            <div className="movieRow">

                    <li>
                    <img src="./demonslayer.jpg" height="213.5" width="120" alt=""/>
                    </li>
                    <li>
                        <img src="./demonslayer.jpg" height="213.5" width="120" alt="" />
                    </li>
                    <li>
                        <img src="./demonslayer.jpg" height="213.5" width="120" alt="" />
                    </li>
                    <li>
                        <img src="./demonslayer.jpg" height="213.5" width="120" alt="" />
                    </li>
               
                 </div>
            </div>
        )
    }
}

export default BrowsePage;