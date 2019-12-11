import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, clearSessionErrors, login } from '../../actions/session_actions';
import SignUp from './signup_form';

const mapStateToProps = ({ errors }) => {
    return { 
        errors: errors.session,
        formType: 'signup'
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        processLoginForm: (user) => dispatch(login(user)),
        clearErrors: () => dispatch(clearSessionErrors())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
