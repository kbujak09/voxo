import { ClipLoader } from 'react-spinners';

import styles from './index.module.scss';

const Loading = () => {
  return (
    <div className={styles.container}>
      <ClipLoader />
    </div>
  )
}

export default Loading;