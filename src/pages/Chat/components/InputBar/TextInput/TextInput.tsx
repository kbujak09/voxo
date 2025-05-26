import { ChangeEvent } from 'react';

import styles from './text-input.module.scss';

type TextInputProps = {
  setIsNotEmpty: (v: boolean) => void;
}

const TextInput = ({ setIsNotEmpty }: TextInputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsNotEmpty(e.target.value.trim() !== '');
  }

  return (
    <div className={styles.container}>
      <input 
        type="text" 
        id='chat-text-input'
        className={styles.input}
        placeholder='Aa'
        onChange={handleChange}
      />
    </div>
  )
};

export default TextInput;