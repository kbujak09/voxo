import backArrow from '@/assets/PeopleCarousel/arrow_back.svg';
import forwardArrow from '@/assets/PeopleCarousel/arrow_forward.svg';

import styles from './index.module.scss';

type props = {
  direction: 'left' | 'right',
  callback: () => void
}

const CarouselButton = ({direction, callback}: props) => {
  return (
    <div className={styles.container}>
      <img
        onClick={callback} 
        src={direction === 'left' ? backArrow : forwardArrow} 
        alt="" 
        className={styles.arrow}
      />
    </div>
  )
}

export default CarouselButton;