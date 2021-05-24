import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import styles from './Navigation.module.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <NavLink className={styles.navlinks} to="/login">Log In</NavLink>
        <NavLink className={styles.navlinks} to="/signup">Sign Up</NavLink>
        {/* <LoginFormModal /> */}
      </>
    );
  }

  return (
    <nav className={styles.navbar} >
      <NavLink className={styles.navbarlogo} exact to="/">Bagel Rise 🥯</NavLink>
      <ul className={styles.navmenu}>
        <li className={styles.navitem}>
          {isLoaded && sessionLinks}
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
