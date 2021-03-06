import React from "react";
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
    constructor(props){
        super(props)
    }
    
   
    render() {
        if (this.props.location.pathname === "/signup") {
          return (
            <div className="mainNav-splash">
              <Link className="" to="/login">
                <img className="logoPrime" src="/netflix.png" alt="" />
              </Link>
              <div className="bottomNav">
                <div className="signinNav"></div>
                <div className="submit-splash">
                  <Link className="signIn-splash" to="/login">
                    Sign In
                  </Link>
                </div>
              </div>
            </div>
          );
        } else if (this.props.location.pathname === "/") {
          return (
            <div className="mainNav-splash">
              <Link className="" to="/login">
                <img className="logo-splash" src="/netflix.png" alt="" />
              </Link>
              <div className="bottomNav">
                <div className="signinNav"></div>
                <div className="submit-splash">
                  <Link className="signIn-splash" to="/login">
                    Sign In
                  </Link>
                </div>
              </div>
            </div>
          );
        } else if (this.props.location.pathname === "/login") {
          return (
            <div className="mainLoginNav">
              <Link className="" to="/signup">
                <img className="logo" src="/netflix.png" alt="" />
              </Link>
              <div className="bottomNav">
                <div className="signinNav"></div>
              </div>
            </div>
          );
        } else if (this.props.location.pathname === "/browse" ||this.props.location.pathname === "/showsforweebs") {
          return (
            <div className="actualMainNav" id="fixedmenu">
              <div className="actualNav">
                <Link className="" to="/browse">
                  <img className="logo" src="/netflix.png" alt="" />
                </Link>
                {/* <div className="actualSigninNav"> */}
                <ul className="navList">
                  <li className="navItem">
                    <Link className="actualSignIn" to="/browse">
                      Home
                    </Link>
                  </li>
                  <li className="navItem">
                    <Link className="actualSignIn" to={`/showsforweebs`}>
                      Shows for Weebs
                    </Link>
                  </li>
                 
                </ul>
              </div>
              <div className="navRight">
                <div className="dropdown">
                  <button className="dropbtn">
                    <img
                      src="https://occ-0-2218-2219.1.nflxso.net/art/65b1d/4b57a37098753aff58d937d5a138c9753e465b1d.png"
                      alt=""
                    />
                  </button>
                  <div className="dropdown-content">
                    <a href="https://www.linkedin.com/in/zaid-pasha-6310ba72/" target="_blank">
                      Hire Me
                    </a>
                    <a href="https://github.com/OnePunchManz" target="_blank">
                      
                     GitHub
                    </a>
                    <a href="/#/login" onClick={this.props.logout}>
                      Sign out of Netflix
                    </a>
                  </div>
                </div>
                <img className="profile-icon" alt=""></img>
              </div>
            </div>
          );
        } else if (this.props.location.pathname.split('videos').length > 0) {
          return (
            <div className="actualMainNav" id="fixedmenu">
              <div className="actualNav">
                <Link className="" to="/browse">
                  <img className="logo-arrow" src="/whitearrow.png" alt="" />
                </Link>
                {/* <div className="actualSigninNav"> */}
              </div>
            </div>
          )
        }
        }

    
    };



export default Greeting;