import styles from './logo.module.scss';

type Props = {
  size: number
}

const Logo = ({ size }: Props) => {
  return (
    <div 
      className={styles.container}
      style={{ height: `${size ? size * 1.5: 18}px`}}>
      <div 
        className={styles.text}
        style={{ fontSize: `${size ? size : 12}px` }}>
          voxo
      </div>
    </div>
  )
}

export default Logo;
