import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import styles from "./Navigation.module.css";
import { demoLogin } from "../../store/session";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const demoFunc = async (e) => {
    e.preventDefault();
    dispatch(demoLogin());

    history.push("/");
  };

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <NavLink className={styles.navlinks} to="/thedeli">
          The Deli
        </NavLink>
        <NavLink className={styles.navlinks} to="/bagelshops">
          Top Rated Shops
        </NavLink>
        <NavLink className={styles.navlinks} to="/bagelshops/add">
          Add A Bagel Shop
        </NavLink>
        <ProfileButton user={sessionUser} />
      </>
    );
  } else {
    sessionLinks = (
      <>
        <button type="button" id={styles.demobutton} onClick={demoFunc}>
          Demo
        </button>
        <NavLink className={styles.navlinks} to="/login">
          Log In
        </NavLink>
        <NavLink className={styles.navlinks} to="/signup">
          Sign Up
        </NavLink>
        {/* <LoginFormModal /> */}
      </>
    );
  }

  return (
    <nav className={styles.navbar}>
      <NavLink className={styles.navbarlogo} exact to="/">
        Bagel Rise 🥯
      </NavLink>
      <ul className={styles.navmenu}>
        <li className={styles.navitem}>{isLoaded && sessionLinks}</li>
      </ul>
    </nav>
  );
}

export default Navigation;
