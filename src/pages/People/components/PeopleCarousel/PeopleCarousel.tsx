import { useState } from 'react';

import styles from './index.module.scss';

const PeopleCarousel = () => {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <div className={styles.container}>
      Carousel
    </div>
  )
}

export default PeopleCarousel;