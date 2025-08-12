import PeopleCarousel from './components/PeopleCarousel';

import styles from './index.module.scss';

const People = () => {
  return (
    <div className={styles.container}>
      <PeopleCarousel />
    </div>
  )
};

export default People;