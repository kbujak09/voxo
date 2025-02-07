import { useState } from "react";

import styles from './auth.module.scss';

const Login = () => {
  const [input, setInput] = useState({
    username: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (input.username !== '' && input.password !== '') {
      // to do
    }
    alert('please provide valid input');
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {

    console.log(e)
    const { name, input } = e.target;
    
    setInput((prev) => ({
      ...prev,
      [name]: input,
    }));
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <label 
        htmlFor="username" 
        className={styles.label}>username</label>
      <input 
        id="username"
        type="text" 
        className={styles.input}
        onChange={(e) => handleInput(e)}/>  
      <label 
        htmlFor="password" 
        className={styles.label}>password</label>
      <input 
        id="password"
        type="text" 
        className={styles.input}
        onChange={(e) => handleInput(e)}/> 
      <button className={styles.submit}>

      </button>
    </form>
  )
}

export default Login;