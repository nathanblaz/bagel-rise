import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import styles from './LoginForm.module.css';
import { NavLink } from 'react-router-dom';

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return (
    <Redirect to="/" />
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  return (
    <div className={styles.card}>
      <form onSubmit={handleSubmit}>
        <h2 className={styles.title}>Log In</h2>
        <p className={styles.subtitle}>Don't have an account? <NavLink to='/signup'>Sign up</NavLink></p>
        <ul className={styles.errors}>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <div className={styles.loginFormInputContainer}>
          <label>
            Username or Email
          </label>
          <input
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
          <label>
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button id={styles.loginBtn} type="submit">Log In</button>
        </div>
      </form>
    </div>
  );
}

export default LoginFormPage;
