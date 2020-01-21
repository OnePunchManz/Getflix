# GetFlix
[Live Link](https://oneflixman.herokuapp.com/#/)

Is a Netflix-inspired Anime app designed to allow you to watch your favrotie anime on the fly! Sign in and browse our selection of anime to choose form! 


## Table of Contents
- [Technology Stack](#Technology-Stack)
- [How to Use](#How-to-Use)
- [Features](#Features)
  * [Custom Nav Bar](#Custom-Nav-Bar)
  * [Custom Error Handling](#Custom-Error-Handling)
- [Future Features](#Future-Features)

## Technology Stack

GetFlix is made using Javascript and Ruby.
- React components were used on the frontend with Redux to manage state.
- Ruby on Rails was used on the backend.
- PostgreSQL was used for the database. 
- AWS was used as a CDN. 


## How to Use 

Once you've signed up or logged in, browse through our video library and begin watching shows! 

## Features

<img src="https://github.com/OnePunchManz/Getflix/blob/master/public/screenshot.png" width="95%" align="center" > 

After logging in, users have a wide variety of animes to browse and watch. All video content was hosted on AWS, to ensure the website lightning fast based on wherever our users may be. 

### Custom Nav Bar

Nav bar dynamically renders whenever the user moves from one page to the other. 

```javascript
render(){
 if (this.props.location.pathname === "/") {
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
    }

```

### Custom Error Handling
Users are required to input their username, and password inorder to signup for an account. To ensure valid inputs, (e.g., passwords over 6 characters), validations targeting each each specific input field were put into place.

```javascript
export const login = (user) => dispatch => (
     APIUtil.login(user)
        .then(user => dispatch(receiveCurrentUser(user)), err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
);
```

```ruby 
 validates :password, length: { minimum: 6 }, allow_nil: true
```

Validations were put in on the front and backend. Model level validations, and database constraints to ensure redundancy.

## Future Features

1. Search Bar to find and browse through our extensive video collection. 
2. MyList to add and remove videos that a user wants to watch. 
