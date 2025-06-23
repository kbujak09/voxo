import FriendSuggestions from './components/FriendSuggestions';
import useAuth from '@/hooks/useAuth';
import useFriendsData from '@/hooks/useFriendsData';
import PeopleNavButton from './components/PeopleNavButton';

import suggestionsIcon from '@/assets/people/suggestions-icon.svg';
import friendsIcon from '@/assets/people/friends-icon.svg';
import sentIcon from '@/assets/people/sent-icon.svg';
import receivedIcon from '@/assets/people/received-icon.svg';

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
      {/* <FriendSuggestions data={suggested}/> */}
      <PeopleNavButton text="FRIEND SUGGESTIONS" icon={suggestionsIcon}/>
      <PeopleNavButton text="FRIENDS" icon={friendsIcon}/>
      <PeopleNavButton text="RECEIVED REQUESTS" icon={receivedIcon}/>
      <PeopleNavButton text="SENT REQUESTS" icon={sentIcon}/>
    </div>
  )
};

export default People;