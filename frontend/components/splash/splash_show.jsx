import React from 'react';
import { Link } from 'react-router-dom'; 
import GreetingContainer from '../greeting/greeting_container';

class ShowShow extends React.Component {

   
    render() {
        return (
            <div className="background-splash">
                < GreetingContainer />
                    <div className="text">
                    <h2>
                        <div>
                        Unlimted movies, TV 
                        </div>
                        <div>
                        shows, and more.
                        </div>
                    </h2>
                    <div>
                    <h3>Watch anywhere. Cancel anytime</h3>
                    </div>
                </div>
            </div>
        )

    }

}
export default ShowShow;