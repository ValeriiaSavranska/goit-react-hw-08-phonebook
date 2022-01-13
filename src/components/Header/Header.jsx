import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import AuthNav from '../Header/AuthNav/AuthNav';
import UserMenu from '../Header/UserMenu/UserMenu';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';
import styles from './Header.module.css';

const Header = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink exact to="/" className={styles.link}>
          Home
        </NavLink>
        <NavLink exact to="/contacts" className={styles.link}>
          Contacts
        </NavLink>
      </nav>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default Header;
