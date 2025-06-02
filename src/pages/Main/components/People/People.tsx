import FriendSuggestions from './components/FriendSuggestions';

import styles from './people.module.scss';

const People = () => {
  return (
    <div className={styles.container}>
      <FriendSuggestions />
    </div>
  )
};

export default People;