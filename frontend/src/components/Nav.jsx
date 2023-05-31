import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { deleteUser } from '../features/user/userSlice';

export default function Nav(props) {
  const dispatch = useDispatch();
  const state = useSelector(s => s);
  const navigate = useNavigate();

  const onUserLoginLogoutClickHandler = () => {
    if (state.user.user) {
      dispatch(deleteUser());
    } else {
      navigate('/login');
    }
  }

  useEffect(() => {
    onUserLoginLogoutClickHandler()
  }, []);

  return (
    <header id="header" className="header d-flex align-items-center">

    <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
      <a href="/" className="logo d-flex align-items-center">
        <h1>Patrimony<span>.</span></h1>
      </a>
      <nav id="navbar" className="navbar">
        <ul>
          <li><Link to="/" style={{fontFamily: 'Edu SA Beginner', fontSize: '22px'}}>Home</Link></li>
          <li><Link to="/buy" style={{fontFamily: 'Edu SA Beginner', fontSize: '22px'}}>See all lands</Link></li>
          <li><Link to="/register" style={{fontFamily: 'Edu SA Beginner', fontSize: '22px'}}>Register</Link></li>
          <li><Link to="/contact" style={{fontFamily: 'Edu SA Beginner', fontSize: '22px'}}>Contact US</Link></li>
          <li style={{fontFamily: 'Edu SA Beginner', fontSize: '22px', color: 'white', cursor: 'pointer'}} onClick={onUserLoginLogoutClickHandler}>
            {!!state.user.user ? 'logout' : 'login'}
          </li>
        </ul>
      </nav>
      <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
    </div>
  </header>
  )
}
