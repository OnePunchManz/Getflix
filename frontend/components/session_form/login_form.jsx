import React from 'react';
import GreetingContainer from '../greeting/greeting_container'

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
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

    // renderErrors() {
    //     return (
    //         <ul>
    //             {this.props.errors.map((error, i) => (
    //                 <li key={`error-${i}`}>
    //                     {error}
    //                 </li>
    //             ))}
    //         </ul>
    //     );
    // }

    render() {
        return (
            <div className="background">
                <GreetingContainer /> 
                {/* <div className="login-form-container"> */}
                    <form onSubmit={this.handleSubmit} className="login-form-box">
                        <div className="signInMessage">
                         Sign In
                        </div>
                        {/* Please {this.props.formType} or {this.props.navLink} */}
                        {/* {this.renderErrors()} */}
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
                            <input className="session-submit" type="submit" value={this.props.formType} />
                        {/* </div> */}
                    </form>
                {/* </div> */}
            </div>
        );
    }
}

export default LoginForm;