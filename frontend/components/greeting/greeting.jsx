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
                    <img className='logo' src="/netflix.png" alt="" />
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
                    <img className='logo' src="/netflix.png" alt="" />
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
                    <img className='logo' src="/netflix.png" alt="" />
                    <div className="actualBottomNav">
                        <div className="actualSigninNav">
                            <Link className="actualSignIn" to="/login">Home</Link>
                            <Link className="actualSignIn" to="/login">TV Shows</Link>
                            <Link className="actualSignIn" to="/login">Movies</Link>
                            <Link className="actualSignIn" to="/login">Recently Added</Link>
                            <Link className="actualSignIn" to="/login">My List</Link>
                        </div>
                    </div>
                    <div className="navRight">
                        
                    </div>
                </div>
                )
            };
        }

    
    };



export default Greeting;