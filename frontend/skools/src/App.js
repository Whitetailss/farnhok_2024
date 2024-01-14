import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { checkLogin } from './redux/auth/actions';
import { checkCmsLogin } from './redux/cmsAuth/actions';
import './assets/css/font.css';
import NavBar from './component/NavBar';
import Router from './Router';
import Footer from './component/Footer';

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkCmsLogin());
    dispatch(checkLogin());
  }, [dispatch]);

  return (
    <div>
      <BrowserRouter>
        {/* <NavBar /> */}
        <Router />
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
};

export default App;