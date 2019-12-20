import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.login = this.login.bind(this);
        
    }

    componentDidMount() {
        this.props.clearErrors()
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(() => {
            this.props.history.push('/browse')
        })
    };

    login(e) {
         e.preventDefault();
         // Using setTimeout with setState to add each letter for demoing

         let demoUsrnm = "zaidclone"; // probably need a forLoop with a setState on each one.
         let demoPswrd = "password";
         let blnkDmUsrnm = "";
         let blnkDmPswrd = "";
         const delayPrms = (
           ms,
           val // Trying a delay with a promise for future mod: promise chaining.
         ) =>
           new Promise(function(resolve) {
             setTimeout(resolve.bind(null, val), ms);
           });
         /* TODO: Refactor these for loops into a helper function. Tricky part is
      the `this.setState({}). eval it?
    */

         for (let i = 0; i < demoUsrnm.length; i++) {
           delayPrms(120 * i).then(() => {
             let char = demoUsrnm[i];
             blnkDmUsrnm += char;
             this.setState({ username: blnkDmUsrnm });
           });
         }
         // Hack to delay based on demo username length.
         // Ideally we use a helper for loop that returns a promise, then
         // we can invoke the loop per string, then chain on promises...
         setTimeout(() => {
           for (let i = 0; i < demoPswrd.length; i++) {
             delayPrms(120 * i).then(() => {
               let char = demoPswrd[i];
               blnkDmPswrd += char;
               this.setState({ password: blnkDmPswrd });
             });
           }
         }, (demoUsrnm.length + 3) * 120); // delay it even more

         // Another hack timer length
         setTimeout(() => {
           this.props.processForm(this.state).then(() => {
             this.props.history.push("/browse");
           });
         }, (demoUsrnm.length + demoPswrd.length + 3) * 120);

    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="mainSplashDiv">
            <div className="background">
                <GreetingContainer /> 
                {/* <div className="login-form-container"> */}
                    <form onSubmit={this.handleSubmit} className="login-form-box">
                        <div className="signInMessage">
                        Sign In    
                        </div>
                        <ul className="sessionError">
                       
                        </ul>
                        {/* <div className="login-form">            */}

                            <input type="text"
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                    className="login-input"
                                    placeholder="Email"
                                />
                            <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    className="login-input"
                                    placeholder="Password"
                                />
                            <input className="session-submit" type="submit" value="Sign In"
                            />
                            <input className="session-submit" type="submit" value="Sign In as Guest" onClick={this.login}
                             />
                             <div className="loginErrors">
                            {this.renderErrors()}
                            </div>
                            <Link className="signupLink" to="/signup" >New to Netflix? Sign up now. </Link>
                        {/* </div> */}
                    </form>
                {/* </div> */}
            </div>
            <div className="footer"></div>
            </div>
        );
    }
}

export default LoginForm;