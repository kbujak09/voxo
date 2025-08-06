import { useState, useEffect } from 'react';

import useAuth from '@/hooks/useAuth';
import useFriendsData from '@/hooks/useFriendsData';
import CarouselButton from './components/CarouselButton';

import styles from './index.module.scss';
import FriendSuggestions from '../FriendSuggestions';

const PeopleCarousel = () => {
  const { user } = useAuth();

  const userId = user?._id;
  const { 
          loading, 
          friends, 
          suggested, 
          receivedRequests, 
          sentRequests 
        } = useFriendsData(userId);

  const [activeIndex, setActiveIndex] = useState(1);

  const items = [<FriendSuggestions data={suggested}/>, <div></div>, <div></div>];

  const slideLeft = () => {
    return setActiveIndex(i => (i > 0 ? i - 1 : items.length - 1));
  }

  const slideRight = () => {
    return setActiveIndex(i => ((i + 1) % items.length))
  }

  return (
    <div className={styles.container}>
      <CarouselButton direction='left' callback={slideLeft}/>
      <div className={styles.carousel}>
        <div
          className={styles.track}
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
        {items.map((Element, index) => (
          <div key={index} className={styles.slide}>
            {Element}
          </div>
        ))}
        </div>
      </div>
      <CarouselButton direction='right' callback={slideRight}/>
    </div>
  )
}

export default PeopleCarousel;