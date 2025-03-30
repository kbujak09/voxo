import styles from './navButton.module.scss';

type Props = {
  text: string,
  image: string,
  onClick: () => void,
  isActive: boolean
}

const NavButton = ({text, image, onClick, isActive}: Props) => {
  return (
    <div className={`${styles.container} ${isActive ? styles.active : ''}`} onClick={onClick}>
      <img 
        src={image} 
        alt={`${text} button`}
        className={styles.image}
      />
      <div className={styles.text}>
        {text}
      </div>
    </div>
  )
}

export default NavButton;