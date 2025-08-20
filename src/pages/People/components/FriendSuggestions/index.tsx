import SuggestionItem from './components/SuggestionItem';
import { FriendSuggestionType } from '@/types/main';

import styles from './index.module.scss';

type FriendSuggestionsProps = {
  data: FriendSuggestionType[]
}

const FriendSuggestions = ({data}: FriendSuggestionsProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span>
          FRIEND SUGGESTIONS
        </span>
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