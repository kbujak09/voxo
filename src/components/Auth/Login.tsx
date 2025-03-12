import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";

import styles from './auth.module.scss';

const Login = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [message, setMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      if (!username || !password) {
        return setMessage('Username and password are required.');
      }
      else {
        setMessage('');
      }

      const req = await fetch('http://localhost:5000/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
  
      const json = await req.json();
  
      if (!json.user) {
        return setMessage(json.message);
      }

      navigate('/');
    }
    catch (err) {
      console.error(err);
    }
  };

  if (isAuthenticated) {
    return <Navigate to={'/'} />
  }

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
      <div className={styles.errorMessage}>
        {message}
      </div>
    </form>
  )
}

export default Login;