import React from 'react';
import GreetingContainer from '../greeting/greeting_container'


class BrowsePage extends React.Component {
   

    render(){
        return(
            <div>
                <GreetingContainer /> 
                <h1>This is working</h1>
                {/* <video src="https://bazaar-media-bucket.s3-us-west-1.amazonaws.com/daze.mp4" autoplay="true"></video> */}
                <iframe width="750" height="500" src="https://www.youtube.com/embed/atxYe-nOa9w?controls=0&amp;start=42" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen autoplay></iframe>
            </div>
        )
    }
}

export default BrowsePage;