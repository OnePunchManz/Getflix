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


const App = () => (
    <div>
        <header>
        {/* <GreetingContainer /> */}
        </header>
        <Route path="/login" component={LogInFormContainer} />
        <Route path="/signup" component={SignUpFormContainer} />
        <ProtectedRoute path="/browse" component={BrowseContainer} />
        <Route exact path="/" component={BrowseContainer} />
        <Route exact path="/videos/:videoId" component={VideoContainer} />
    </div>
);

export default App;