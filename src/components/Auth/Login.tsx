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

  const handleInput = (e: React.ChangeEvent<HTMLFormElement>) => {
    const { name, input } = e.target;
    
    setInput((prev) => ({
      ...prev,
      [name]: input,
    }));
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}></form>
  )
}

export default Login;