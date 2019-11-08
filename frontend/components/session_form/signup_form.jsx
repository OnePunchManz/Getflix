import React from 'react';

class SignUp extends React.Component {
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
        this.props.processForm(user);
    }

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
            <div className="">
                <div className="signup-form-container">
                    <form onSubmit={this.handleSubmit} className="signup-form-box">
                        <div className="form">
                            <div className="stepTitle"> 
                                Sign up to start your free month 
                            </div>
                            {/* Please {this.props.formType} or {this.props.navLink} */}
                            <div className="regFormTitle">
                                Create your account.
                            </div>
                        </div>
                                    {/* {this.renderErrors()} */}
                        <div className="signup-form">
                            <div className="signup-input-user">
                                {/* <label>Email */}
                                    <input type="text"
                                        value={this.state.username}
                                        onChange={this.update('username')}
                                        className="signup-input"
                                         placeholder='Email'
                                            
                                    />
                                {/* </label> */}
                            </div>

                            <div className="signup-input-password">
                                {/* <label>Password */}
                                    <input type="password"
                                        value={this.state.password}
                                        onChange={this.update('password')}
                                        className="signup-input"
                                        placeholder='Password'
                                    />
                                {/* </label> */}
                            </div>

                            <input className="signup-session-submit" typ    e="submit" value={this.props.formType} />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignUp;
