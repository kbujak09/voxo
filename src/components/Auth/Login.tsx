import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from './auth.module.scss';

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (username !== '' && password !== '') {
      // to do
    }

    // alert('please provide valid input');
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <div className={styles.title}>
        Welcome back!
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
      <div className={styles.submitContainer}>
        <button className={styles.submit}>
          LOGIN
        </button>
      </div>
      <div className={styles.switchContainer}>
        Don't have an account? <span className={styles.switch} onClick={() => navigate('/register')}>Sign up</span>
      </div>
    </form>
  )
}

export default Login;