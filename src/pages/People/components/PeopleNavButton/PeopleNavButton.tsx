import styles from './index.module.scss';

type PeopleNavButtonType = {
  text: string,
  icon: string
}

const PeopleNavButton = ({text, icon}: PeopleNavButtonType) => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        {text}
      </div>
      <img
        src={icon}
        alt={text + ' button'}
        className={styles.icon}
      />
    </div>
  )
};

export default PeopleNavButton;