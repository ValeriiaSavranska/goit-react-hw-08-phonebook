import { useSelector, useDispatch } from 'react-redux';
import { getUsername } from '../../../redux/auth/authSelectors';
import { logOut } from '../../../redux/auth/authOperations';

import styles from './UserMenu.module.css';

const UserMenu = () => {
  const userName = useSelector(getUsername);
  const dispatch = useDispatch();

  return (
    <div className={styles.wrapper}>
      <span className={styles.text}>Welcome, {userName}</span>
      <button
        className={styles.btn}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
