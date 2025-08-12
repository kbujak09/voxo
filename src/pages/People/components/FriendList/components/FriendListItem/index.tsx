import { FriendType } from '@/types/main';

import styles from './index.module.scss';

const FriendListItem = ({data}: FriendType) => {
  return (
    <div className={styles.container}>
      {data}
    </div>
  )
}

export default FriendListItem;