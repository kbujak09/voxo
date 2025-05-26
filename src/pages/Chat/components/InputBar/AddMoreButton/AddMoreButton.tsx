import addIcon from '../../../../../assets/add.svg';

import styles from './add-more-button.module.scss';

const AddMoreButton = () => {
  return (
    <div className={styles.container}>
      <button 
        className={styles.btn}
        type='button'
      >
        <img 
          src={addIcon} 
          alt="add-icon" 
          className={styles.icon}
        />
      </button>
    </div>
  )
};

export default AddMoreButton;