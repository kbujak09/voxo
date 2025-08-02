import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from '../index.module.scss';

const Register = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const [message, setMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (!username || !password || !confirmPassword) {
        return setMessage('All fields are required.')
      }
      else {
        setMessage('');
      }
  
      const req = await fetch(`${import.meta.env.VITE_API}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username,
          password: password,
          confirmPassword: confirmPassword
        })
      })
  
      const json = await req.json();

      console.log(json)
  
      if (json.errors) {
        return setMessage(json.errors[0].message || json.errors[0].msg);
      }
    } 
    catch (err) {
      console.error(err);
    }
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
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
          SIGN UP
        </button>
      </div>
      <div className={styles.switchContainer}>
        Already have an account? <span onClick={() => {navigate('/login')}} className={styles.switch}>Log in</span>
      </div>
      <div className={styles.errorMessage}>
        {message}
      </div>
    </form>
  )
};

export default Register;