import React, { useState } from 'react';
// import FacebookLogin from 'react-facebook-login';

import { NavLink, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginFacebook, loginUser } from '../redux/auth/actions';
import { Input } from 'reactstrap';
import './../assets/css/login.css';

export const PureLogin = (props) => {
  const navigate = useNavigate();

  const [modal, setModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [errorStyle, setErrorStyle] = useState('loginInput');

  const toggle = () => {
    setModal(!modal);
  };

  const componentClick = () => {
    return null;
  };

  const responseFacebook = (userInfo) => {
    if (userInfo.accessToken) {
      props.loginFacebook(userInfo);
    }
    return null;
  };

  const onChangeValue = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const login = (e) => {
    e.preventDefault();
    props.loginUser(email, password);
    checkLogin();
  };

  const checkLogin = () => {
    if (props.isAuthenticated) {
      navigate('/');
    } else {
      setErrorMessage('Please check your Email and password');
      setErrorStyle('errorStyle');
      setPassword('');
    }
  };

  return (
    <div id='loginContainer'>
      <form id='loginForm'>
        <div className='loginText'>
          <h3>Hello Parents!</h3>
          <p>Sign into your account here.</p>
        </div>
        <div>
          {/* <FacebookLogin
            className='loginButton'
            appId='339253950099115'
            autoLoad={false}
            cookies={false}
            fields='name,email,picture'
            onClick={componentClick}
            callback={responseFacebook}
          /> */}
        </div>
        <br />
        <div className='loginText' id='loginOr'>
          <h6>OR</h6>
        </div>
        <div>
          <label>Email</label>
          <Input
            className={errorStyle}
            type='text'
            name='email'
            placeholder='Enter your email'
            onChange={onChangeValue}
            value={email}
          />
        </div>
        <div>
          <label>Password</label>
          <Input
            className={errorStyle}
            type='password'
            name='password'
            placeholder='Enter your password'
            onChange={onChangeValue}
            value={password}
          />
        </div>
        <div id='loginButtonBox'>
          <button className='loginButton' type='submit' onClick={login}>
            LOGIN
          </button>
        </div>
        <div className='loginText' id='loginNotRegister'>
          <p id='errorMessage'>{errorMessage}</p>
          <p>
            Not registered? <NavLink to='/signup' className='loginLink'>Sign up</NavLink>
          </p>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (email, password) => {
      dispatch(loginUser(email, password));
    },
    loginFacebook: (accessToken) => {
      dispatch(loginFacebook(accessToken));
    },
  };
};

export const Login = connect(mapStateToProps, mapDispatchToProps)(PureLogin);