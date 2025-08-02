import { ChangeEvent, useRef, useState } from 'react';

import styles from './index.module.scss';

type TextInputProps = {
  setIsNotEmpty: (v: boolean) => void;
}

const TextInput = ({ setIsNotEmpty }: TextInputProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [height, setHeight] = useState(30);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = e.target;
    const value = textarea.value;
    setIsNotEmpty(value.trim() !== '');

    const newHeight = value.length === 0 ? 30 : 30 + Math.floor((value.length - 1) / 25) * 19.2;  
    setHeight(newHeight);
  };

  return (
    <div className={styles.container}>
      <textarea 
        id='chat-text-input'
        className={styles.input}
        placeholder='Aa'
        ref={textareaRef}
        onChange={handleChange}
        style={{ height: `${height}px` }}
      >
      </textarea>
    </div>
  )
};

export default TextInput;