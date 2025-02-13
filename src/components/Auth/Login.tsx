import { useState } from "react";

import styles from './auth.module.scss';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (username !== '' && password !== '') {
      // to do
    }

    // alert('please provide valid input');
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name === 'username') {
      setUsername(value);
    }

    if (name === 'password') {
      setPassword(value);
    }
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <div className={styles.title}>Login</div>
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
          onChange={(e) => handleInput(e)}
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
          onChange={(e) => handleInput(e)}
        /> 
      </div>
      <div className={styles.submitContainer}>
        <button className={styles.submit}>
          LOGIN
        </button>
      </div>
    </form>
  )
}

export default Login;