# GetFlix
[Live Link](https://oneflixman.herokuapp.com/#/)

Is a Netflix-inspired Anime app designed to allow you to watch your favrotie anime on the fly! Sign in and browse our selection of anime to choose form! 


## Table of Contents
- [Technology Stack](#Technology-Stack)
- [How to Use](#How-to-Use)
- [Features](#Features)
  * [Fresh Workouts](#Fresh-Workouts)
- [Future Features](#Future-Features)

## Technology Stack

GetFlix is made using Javascript and Ruby.
- React components were used on the frontend with Redux to manage state.
- Ruby on Rails was used on the backend.
- SQL was used for the database. 
- AWS was used as a CDN. 


## How to Use 

Once you've signed up or logged in, browse through our video library and begin watching shows! 

## Features

<img src="https://github.com/OnePunchManz/Getflix/blob/master/public/screenshot.png" width="95%" align="center" > 

After logging in, users have a wide variety of animes to browse and watch. All video content was hosted on AWS, to ensure the website lightning fast based on wherever our users may be. 

### Custom Nav Bar based on URL

Nav bar dynamically renders whenever the user moves from one page to the other. 

```javascript

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

```

## Future Features

1. Search Bar to find and browse through our extensive video collection. 
2. MyList to add and remove videos that a user wants to watch. 
