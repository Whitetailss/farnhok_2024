import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../redux/auth/actions';
import { logOutCms } from '../redux/cmsAuth/actions';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import '../assets/css/navBar.css';
import userBlue from '../assets/image/userBlue.svg';

const PureNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isSchoolAuthenticated = useSelector((state) => state.cmsAuth.isSchoolAuthenticated);
  const userName = useSelector((state) => state.auth.userName);
  const userPicture = useSelector((state) => state.auth.userPicture);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuthenticated) {
      let userPicture = localStorage.getItem('userPicture');
      // Update the userPicture state
    }
  }, [isAuthenticated]);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLogOut = () => {
    // Clear the userPicture state
    dispatch(logOut());
    dispatch(logOutCms());
  };

  return (
    <div>
      <Navbar id="nav" light expand="md">
        <NavbarBrand id="navLogo" href="/">
          Farnhook
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          {isAuthenticated ? (
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink activeClassName="navBarActive" className="navText" to="/search">
                  Search
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="navText" to="/profile">
                  Schools & Events
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  {userPicture !== null ? (
                    <img id="navBarIcon" src={userPicture} alt="empty" />
                  ) : (
                    <img id="navBarIcon" src={userBlue} alt="" />
                  )}
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <NavLink className="navText" to="/setting">
                      Setting
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink className="navText" to="/" onClick={handleLogOut}>
                      Logout
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          ) : isSchoolAuthenticated ? (
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="navText" to="/cms/school_details">
                  Main Page
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="navText" to="/cms/events">
                  Events
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="navText" to="/cms/social">
                  Social Feed
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="navText" to="/cms/socialTest/6">
                  Social Test
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="navText" to="/" onClick={handleLogOut}>
                  Logout
                </NavLink>
              </NavItem>
            </Nav>
          ) : (
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="navText" to="/login">
                  Login
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="navText" to="/signup">
                  Sign Up
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink id="navSchoolArea" to="/cmsAuth">
                  School Area
                </NavLink>
              </NavItem>
            </Nav>
          )}
        </Collapse>
      </Navbar>
    </div>
  );
};

export default PureNavBar;