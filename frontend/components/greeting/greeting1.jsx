import React from 'react';
import { Link } from 'react-router-dom';




const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <Link to="/login">Signin</Link>
            &nbsp;or&nbsp;
      <Link to="/signup">Sign up!</Link>
        </nav>
    );
    const personalGreeting = () => (
        <hgroup className="header-group">
            <h2 className="header-name">Hi, {currentUser.username}!</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    );

    return (
        <div className='mainNav'>
            <img className='logo' src="/netflix_logo.jpg" alt=""/>
                <div className="bottomNav">
                <div className="signinNav">
                    </div>
                    <Link to="/login">Sign In</Link>
                {/* <div className="browseNav">
                </div>
                    <Link to="/login">Home</Link>
                <div className="moviesNav">
                </div>
                    <Link to="/login">Movies</Link>
                <div className="recentlyAddedNav">
                </div>
                    <Link to="/login">Recently Added</Link>
                <div className="myListNav">
                </div>
                    <Link to="/login"> My List</Link> */}
                </div>
            </div>
       
        

        )
};


export default Greeting;
