import FriendListItem from './components/FriendListItem';
import { FriendType } from '@/types/main';

import styles from './index.module.scss';

type FriendListProps = {
  data: FriendType[]
}

const FriendList = ({data}: FriendListProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Friends
      </div>
      <div className={styles.list}>
        {/* {
          data.map((s) => {
            return (
              <FriendListItem data={s}/>
            );
          })
        } */}
      </div>
    </div>
  )
}

export default FriendList;