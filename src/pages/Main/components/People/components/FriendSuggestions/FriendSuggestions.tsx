import SuggestionItem from './SuggestionItem';
import { FriendSuggestionType } from '@/types/main';

import styles from './friend-suggestions.module.scss';

type FriendSuggestionsProps = {
  data: FriendSuggestionType[]
}

const FriendSuggestions = ({data}: FriendSuggestionsProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Friend Suggestions
      </div>
      <div className={styles.list}>
        {
          data.map((s) => {
            return (
              <SuggestionItem data={s} key={s._id}/>
            );
          })
        }
      </div>
    </div>
  )
};

export default FriendSuggestions;