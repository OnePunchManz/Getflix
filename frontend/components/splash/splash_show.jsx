import React from 'react';
import { Link } from 'react-router-dom'; 
import GreetingContainer from '../greeting/greeting_container';

class ShowShow extends React.Component {

   
    render() {
        return (
            <div className="mainSplashDiv">
                <div className="shadow">
            <div className="background-splash">
                < GreetingContainer />
                    <div className="text">
                        
                        <div>
                            <h2 id="greeting"> Unlimted movies, TV </h2> 
                        </div>
                        <div>
                            <h2 id="greeting">shows, and more.</h2>
                        </div>
                   
                    <div>
                        <h3 id="greeting">Watch anywhere. Cancel anytime</h3>
                    </div>
                  
                <Link className="signUp-splash" to="/signup">TRY 30 DAYS FREE</Link>
                </div>
            </div>
            </div>
           
            <div className="footer"></div>
            </div>
        )

    }

}
export default ShowShow;