import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { Input } from 'reactstrap';
import { signUpUser } from '../redux/auth/actions';
import './../assets/css/signUp.css';

const PureSignUp = ({ isSignUp, signUpUser }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [errorStyleUser, setErrorStyleUser] = useState('loginInput');
  const [errorStylePassword, setErrorStylePassword] = useState('loginInput');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const onChangeValue = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const validateEmail = (email) => {

    // console.log('validateEmail')
    const emailAddress = /\S+@\S+\.\S+/;
    return emailAddress.test(email);
  };

  const signUp = (e) => {
    e.preventDefault();
    console.log('signing up');
    const lengthPassword = password.length;
    console.log(email, lengthPassword);
    if (!validateEmail(email)) {
      setErrorMessage('Make sure you enter a proper email address');
      setErrorStyleUser('errorStyle');
    } else if (lengthPassword < 6) {
      setErrorMessage('Make sure your password has at least 6 letters.');
      setErrorStylePassword('errorStyle');
      setErrorStyleUser('loginInput');
    } else {

      // console.log('yoyo im here')
      setErrorMessage('');
      setErrorStyleUser('loginInput');
      setErrorStylePassword('loginInput');
      signUpUser(email, password);
      setTimeout(checkSignUp, 500);
    }
  };

  const checkSignUp = () => {
    if (isSignUp) {
      setErrorMessage('Signed up, redirecting to login page after 1 second.');
      setTimeout(() => {
        navigate('/login');
      }, 1000);
    } else {
      setErrorStyleUser('errorStyle');
      setErrorStylePassword('loginInput');
      setErrorMessage('Email has been taken.');
    }
  };

  return (
    <div id='loginContainer'>
      <form id='loginForm'>
        <div className='loginText'>
          <h3>Join KinderGarten!</h3>
          <p>Sign up to unlock more features.</p>
        </div>
        <div>
          <label>Email</label>
          <Input
            className={errorStyleUser}
            type='email'
            name='email'
            placeholder='Enter your email'
            onChange={onChangeValue}
            value={email}
          />
        </div>
        <div>
          <label>Password (At least 6 letters)</label>
          <Input
            className={errorStylePassword}
            type='password'
            name='password'
            placeholder='Enter your password'
            onChange={onChangeValue}
            value={password}
          />
        </div>
        <div id='loginButtonBox'>
          <button className='loginButton' onClick={signUp}>
            Sign Up
          </button>
        </div>
        <div className='loginText' id='loginNotRegister'>
          <p id='errorMessage'>{errorMessage}</p>
          <p>
            Already registered? <NavLink className='loginLink' to='/login'>Login</NavLink>
          </p>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isSignUp: state.auth.signUpMessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUpUser: (email, password) => {
      dispatch(signUpUser(email, password));
    },
  };
};

export const SignUp = connect(mapStateToProps, mapDispatchToProps)(PureSignUp)

// SignUp