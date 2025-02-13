import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './auth.module.scss';

const Register = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  return (
    <form className={styles.container}>
      <div className={styles.title}>
        Create an account
      </div>
      <div className={styles.formCell}>
        <label 
          htmlFor="username" 
          className={styles.label}>
            username
          </label>
        <input 
          id="username"
          name="username"
          type="text" 
          className={styles.input}
          onChange={(e) => setUsername(e.target.value)}
        />  
      </div>
      <div className={styles.formCell}>
        <label 
          htmlFor="password" 
          className={styles.label}>
            password
          </label>
        <input 
          id="password"
          name="password"
          type="password" 
          className={styles.input}
          onChange={(e) => setPassword(e.target.value)}
        /> 
      </div>
      <div className={styles.formCell}>
        <label 
          htmlFor="confirmPassword" 
          className={styles.label}>
            confirm password
          </label>
        <input 
          id="confirmPassword"
          name="confirmPassword"
          type="password" 
          className={styles.input}
          onChange={(e) => setConfirmPassword(e.target.value)}
        /> 
      </div>
      <div className={styles.submitContainer}>
        <button className={styles.submit}>
          Sign up
        </button>
      </div>
      <div className={styles.switchContainer}>
        Already have an account? <span onClick={() => {navigate('/login')}} className={styles.switch}>Log in</span>
      </div>
    </form>
  )
};

export default Register;