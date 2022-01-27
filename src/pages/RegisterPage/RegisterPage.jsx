import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperations';
import styles from './RegisterPage.module.css';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;

    if (name === 'name') {
      setName(value);
    }
    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const credentials = { name, email, password };
    dispatch(register(credentials));
    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          Name
          <input
            type="name"
            name="name"
            value={name}
            onChange={handleChange}
            className={styles.input}
          />
        </label>

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
          Sing up
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
