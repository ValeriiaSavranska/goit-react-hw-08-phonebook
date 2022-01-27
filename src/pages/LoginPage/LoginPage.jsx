import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/authOperations';
import styles from './LoginPage.module.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;

    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const credentials = { email, password };
    console.log(credentials);
    dispatch(logIn(credentials));
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            className={styles.input}
          />
        </label>

        <label className={styles.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            className={styles.input}
          />
        </label>

        <button type="submit" className={styles.btn}>
          Sign in
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
