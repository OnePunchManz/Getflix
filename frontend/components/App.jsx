import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import BrowseContainer from './browse/browse_container'
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import VideoContainer from './videos/video_container'
import ShowContainer from './videos/show_container'
import SplashContainer from './splash/splash_container'


const App = () => (
    <div>
        <header>
        {/* <GreetingContainer /> */}
        </header>
        <Route exact path="/" component={SplashContainer} />
        <Route path="/login" component={LogInFormContainer} />
        <Route path="/signup" component={SignUpFormContainer} />
        <ProtectedRoute path="/browse" component={BrowseContainer} />
        <ProtectedRoute  path="/videos/1" component={ShowContainer}
         />
        <ProtectedRoute path="/videos/2" component={ShowContainer}
        />
        <ProtectedRoute path="/videos/3" component={ShowContainer}
        />
        <ProtectedRoute path="/videos/4" component={ShowContainer}
        />
    </div>
);

export default App;