import { useState } from 'react';

import AddMoreButton from './AddMoreButton';
import TextInput from './TextInput';
import DynamicButton from './DynamicButton';

import styles from './index.module.scss';

const InputBar = () => {
  const [isNotEmpty, setIsNotEmpty] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <AddMoreButton />
      <TextInput setIsNotEmpty={setIsNotEmpty} />
      <DynamicButton isNotEmpty={isNotEmpty} />
    </div>
  )
};

export default InputBar;