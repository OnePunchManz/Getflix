import React from 'react';
import GreetingContainer from '../greeting/greeting_container'


class BrowsePage extends React.Component {
   
  

    render(){
        
        return(
            <div className="mainerDiv">
            
                <GreetingContainer /> 
                <div className="mainBrowseDiv">
                <div className="mainvideo">
                {/* <iframe className="Video"  src="https://www.youtube.com/embed/atxYe-nOa9w?controls=0&amp;start=42" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" width="560" height="760"></iframe> */}
                        <video id="myVideo" src="./myhero.mp4"></video>

                        {/* <video src="https://onebucketman.s3-us-west-1.amazonaws.com/My+Hero+Academia+-+Opening+2+_+Peace+Sign+(1080p_24fps_H264-128kbit_AAC).mp4" width="250px" height="250px"></video> */}

               
                <div className="buttonPrime">
                
                <button className="browse-buttons"> Play</button>
                <button className="browse-buttons-2"> + My List</button>
                <button className="browse-buttons-3"> More Info</button>
                 </div>
                </div>
            </div>
            <div className="movieRow">

                    
                    <img src="./demonslayer.jpg" height="213.5" width="120" alt=""/>
                   
                    
                        <img src="./demonslayer.jpg" height="213.5" width="120" alt="" />
                   
                    
                        <img src="./demonslayer.jpg" height="213.5" width="120" alt="" />
                   
                    
                        <img src="./demonslayer.jpg" height="213.5" width="120" alt="" />
                   
               
                 </div>
            </div>
        )
    }
}

export default BrowsePage;