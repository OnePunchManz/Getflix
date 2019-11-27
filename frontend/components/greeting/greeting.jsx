import React from "react";
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
    constructor(props){
        super(props)
    }


    //  sessionLinks = () => (
    //     <nav className="login-signup">
    //         <Link to="/login">Signin</Link>
    //         &nbsp;or&nbsp;
    //   <Link to="/signup">Sign up!</Link>
    //     </nav>
    // );
    //  personalGreeting = () => (
    //     <hgroup className="header-group">
    //         <h2 className="header-name">Hi, {currentUser.username}!</h2>
    //         <button className="header-button" onClick={logout}>Log Out</button>
    //     </hgroup>
    // );
    render() {

        if (this.props.location.pathname === '/signup') {
            return (
                <div className='mainNav'>
                    <Link className="" to="/login">
                        <img className='logo' src="/netflix.png" alt="" /></Link>
                    <div className="bottomNav">
                        <div className="signinNav">
                        </div>
                        <Link className="signIn" to="/login">Sign In</Link>
                    </div>
                </div>
            )
        }
        else if (this.props.location.pathname === '/login') {
            return (
                <div className='mainLoginNav'>
                    <Link className="" to="/signup"><img className='logo' src="/netflix.png" alt="" /></Link>
                    <div className="bottomNav">
                        <div className="signinNav">
                        </div>
                    </div>
                </div>
            )
        }
        else if (this.props.location.pathname === '/browse'){
            return (
                <div className='actualMainNav'>
                    <div className="actualNav">
                        <Link className="" to="/browse"><img className='logo' src="/netflix.png" alt="" /></Link>
                        {/* <div className="actualSigninNav"> */}
                        <ul className="navList">
                            <li className="navItem">
                            <Link className="actualSignIn" to="/browse">Home</Link>
                            </li>
                            <li className="navItem">
                                <a className="actualSignIn" href="https://www.netflix.com/browse/genre/83">TV Shows</a>  
                            </li>
                            <li className="navItem">
                                <a className="actualSignIn" href="https://www.netflix.com/browse/genre/34399">Movies</a>
                            </li>
                            <li className="navItem">
                                <a className="actualSignIn" href="https://www.netflix.com/browse/genre/1592210">Recently Added</a>
                            </li>
                            <li className="navItem">
                                <a className="actualSignIn" href="https://www.netflix.com/browse/my-list">My List</a>
                            </li>
                        </ul>
                        {/* </div> */}
                    </div>
                    <div className="navRight">
                        <div className="dropdown" >
                            <button className="dropbtn"><img src="https://occ-0-2218-2219.1.nflxso.net/art/65b1d/4b57a37098753aff58d937d5a138c9753e465b1d.png" alt=""/></button>
                            <div className="dropdown-content">
                                <a href="#">Manage Profiles</a>
                                <a href="/#/login" onClick={this.props.logout} >Sign out of Netflix</a>
                            </div>
                        </div>
                        <img className="profile-icon"  alt=""></img>
                
                     
                        
                    </div>
                </div>
                )
            };
        }

    
    };



export default Greeting;