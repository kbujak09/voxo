import { useState, useEffect } from 'react';

import CarouselButton from './components/CarouselButton';

import styles from './index.module.scss';

const PeopleCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const items = ['green', 'blue', 'red'];

  const slideLeft = () => {
    return setActiveIndex(i => (i > 0 ? i - 1 : items.length - 1));
  }

  const slideRight = () => {
    return setActiveIndex(i => ((i + 1) % items.length))
  }

  useEffect(() => {
    console.log(activeIndex);
  }, [activeIndex])

  return (
    <div className={styles.container}>
      <CarouselButton direction='left' callback={slideLeft}/>
      <div className={styles.carousel}>
        <div
          className={styles.track}
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {items.map((color, index) => (
            <div
              key={index}
              className={styles.slide}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
      <CarouselButton direction='right' callback={slideRight}/>
    </div>
  )
}

export default PeopleCarousel;