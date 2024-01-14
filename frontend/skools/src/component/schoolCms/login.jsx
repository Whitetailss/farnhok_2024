import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginCmsUser, signUpCmsUser } from '../../redux/cmsAuth/actions';
import { Input } from 'reactstrap';
import './../../assets/css/cmsLogin.css';

const PureLogin = ({ isSchoolAuthenticated, isSchoolSignUp, loginCmsUser, signUpCmsUser }) => {
    const [modal, setModal] = useState(false);
    const [isSignUpBox, setIsSignUpBox] = useState(false);
    const [signUpEmail, setSignUpEmail] = useState('');
    const [signUpPassword, setSignUpPassword] = useState('');
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [errorStyleUser, setErrorStyleUser] = useState('loginInput');
    const [errorStylePassword, setErrorStylePassword] = useState('loginInput');

    const navigate = useNavigate();

    const toggle = () => {
        setModal(prevState => !prevState.modal);
    };

    const componentClick = () => {
        return null;
    };

    const onChangeValue = e => {
        const { name, value } = e.target;
        switch (name) {
            case 'signUpEmail':
                setSignUpEmail(value);
                break;
            case 'signUpPassword':
                setSignUpPassword(value);
                break;
            case 'loginEmail':
                setLoginEmail(value);
                break;
            case 'loginPassword':
                setLoginPassword(value);
                break;
            default:
                break;
        }
    };

    const validateEmail = email => {
        var emailAddress = /\S+@\S+\.\S+/;
        return emailAddress.test(email);
    };

    const handleSignUpBox = e => {
        e.preventDefault();
        setIsSignUpBox(prevState => !prevState);
    };

    const signUpCms = e => {
        e.preventDefault();
        console.log('signing up');
        var email = signUpEmail;
        var lengthPassword = signUpPassword.length;
        console.log(email, lengthPassword);
        if (!validateEmail(email)) {
            setErrorMessage('Make sure you enter a proper email address');
            setErrorStyleUser('errorStyle');
        } else if (lengthPassword < 6) {
            setErrorMessage('Make sure your password has at least 6 letters.');
            setErrorStylePassword('errorStyle');
            setErrorStyleUser('loginInput');
        } else {
            setErrorMessage('');
            setErrorStyleUser('loginInput');
            setErrorStylePassword('loginInput');
            signUpCmsUser(signUpEmail, signUpPassword);
            setTimeout(() => checkCmsSignUp(), 500);
        }
    };

    const checkCmsSignUp = () => {
        if (isSchoolSignUp) {
            setErrorMessage('Signed up, redirecting to login page after 1 second.');
        } else {
            setErrorStyleUser('errorStyle');
            setErrorStylePassword('loginInput');
            setErrorMessage('Email has been taken.');
        }
    };

    const loginCms = e => {
        e.preventDefault();
        loginCmsUser(loginEmail, loginPassword);
        checkCmsLogin();
    };

    const checkCmsLogin = () => {
        if (isSchoolAuthenticated) {
            navigate('/');
        } else {
            setErrorMessage('Please check your email and password');
            setErrorStyleUser('errorStyle');
            setLoginPassword('');
        }
    };

    return (
        <div>
            {isSignUpBox ? (
                <div>
                    <form id="cmsLoginForm">
                        <div>
                            <Input
                                className={errorStyleUser}
                                type="email"
                                name="signUpEmail"
                                placeholder="Enter your email"
                                onChange={onChangeValue}
                                value={signUpEmail}
                            />
                        </div>
                        <div>
                            <Input
                                className={errorStylePassword}
                                type="password"
                                name="signUpPassword"
                                placeholder="Enter your password (At least 6 characters)"
                                onChange={onChangeValue}
                                value={signUpPassword}
                            />
                        </div>
                        <div id="cmsLoginButtonBox">
                            <button className="cmsSignupButton" onClick={signUpCms}>
                                Start Branding
                            </button>
                        </div>
                        <div className="loginText" id="loginNotRegister">
                            <p id="errorMessage">{errorMessage}</p>
                            <p className="toSignup" onClick={handleSignUpBox}>
                                Already registered? Login
                            </p>
                        </div>
                    </form>
                </div>
            ) : (
                <div>
                    <form id="cmsLoginForm">
                        <div>
                            <Input className={errorStyleUser} type="text" name="loginEmail" placeholder="Enter your email" onChange={onChangeValue} value={loginEmail} />
                        </div>
                        <div>
                            <Input className={errorStylePassword} type="password" name="loginPassword" placeholder="Enter your password" onChange={onChangeValue} value={loginPassword} />
                        </div>
                        <div id="cmsLoginButtonBox">
                            <button className="cmsSignupButton" onClick={loginCms}>
                                Start Branding
                            </button>
                        </div>
                        <div className="loginText" id="loginNotRegister">
                            <p id="errorMessage">{errorMessage}</p>
                            <p className="toSignup" onClick={handleSignUpBox}>
                                Not registered yet? Sign up
                            </p>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

const mapStateToProps = state => ({
    isSchoolAuthenticated: state.cmsAuth.isSchoolAuthenticated,
    isSchoolSignUp: state.cmsAuth.isSchoolSignUp,
});

export const Login = connect(mapStateToProps, { loginCmsUser, signUpCmsUser })(PureLogin);