import useAuth from '@/hooks/useAuth';
import useFriendsData from '@/hooks/useFriendsData';

import SectionSwitcher from './components/SectionSwitcher';

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
      <SectionSwitcher />
    </div>
  )
};

export default People;