import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

const AuthNav = () => (
  <div className={styles.wrapper}>
    <NavLink
      to="/register"
      exact
      className={styles.link}
      // activeStyle={styles.activeLink}
    >
      Register
    </NavLink>
    <NavLink
      to="/login"
      exact
      className={styles.link}
      // activeStyle={styles.activeLink}
    >
      Login
    </NavLink>
  </div>
);

export default AuthNav;
