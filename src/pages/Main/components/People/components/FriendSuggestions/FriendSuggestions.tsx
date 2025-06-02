import useFriendsData from '@/hooks/useFriendsData';

import styles from './friend-suggestions.module.scss';

const FriendSuggestions = () => {
  const { loading } = useFriendsData();

  return <div>{loading}</div>
};

export default FriendSuggestions;