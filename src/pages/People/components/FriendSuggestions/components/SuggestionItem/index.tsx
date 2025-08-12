import { FriendSuggestionType } from '@/types/main';
import Avatar from '@/components/Avatar';
import useFriendRequests from '@/hooks/useFriendRequest';
import useAuth from '@/hooks/useAuth';

import styles from './index.module.scss';

type SuggestionItemProps = {
  data: FriendSuggestionType;
}

const SuggestionItem = ({data}: SuggestionItemProps) => {
  const { sendRequest } = useFriendRequests();
  const { user } = useAuth();

  const [from, to] = [user?._id, data._id];

  console.log(user);

  return (
    <div className={styles.container}>
      <Avatar image={data.avatar} size={52}/>
      <div className={styles.userInfo}>
        <div className={styles.username}>
          { data.username }
        </div>
      </div>
      <div className={styles.buttons}>
        <button 
          className={styles.addBtn}
          onClick={() => sendRequest({from, to})}
        >
          Add Friend
        </button>
      </div>
    </div>
  )
};

export default SuggestionItem;