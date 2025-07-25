import FriendSuggestions from './components/FriendSuggestions';
import useAuth from '@/hooks/useAuth';
import useFriendsData from '@/hooks/useFriendsData';

import PeopleCarousel from './components/PeopleCarousel';


import styles from './people.module.scss';

const People = () => {
  const { user } = useAuth();

  const userId = user?._id;
  const { 
          loading, 
          friends, 
          suggested, 
          receivedRequests, 
          sentRequests 
        } = useFriendsData(userId);

  return (
    <div className={styles.container}>
      <PeopleCarousel />
    </div>
  )
};

export default People;