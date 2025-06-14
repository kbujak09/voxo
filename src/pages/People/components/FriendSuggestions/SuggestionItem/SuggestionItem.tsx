import { FriendSuggestionType } from '@/types/main';
import Avatar from '@/components/Avatar';

import styles from './suggestion-item.module.scss';

type SuggestionItemProps = {
  data: FriendSuggestionType;
}

const SuggestionItem = ({data}: SuggestionItemProps) => {
  return (
    <div className={styles.container}>
      <Avatar image={data.avatar} size={48}/>
      <div className={styles.userInfo}>
        <div className={styles.username}>
          { data.username }
        </div>
      </div>
      <div className={styles.buttons}>
        <button className={styles.addBtn}>
          Add Friend
        </button>
      </div>
    </div>
  )
};

export default SuggestionItem;