import styles from './index.module.scss';

type Props = {
  size: number
}

const Logo = ({ size }: Props) => {
  return (
    <div className={styles.container} aria-label='voxo logo'>
      <div className={styles.text} style={{ fontSize: `${size ?? 12}px` }}>
          voxo
      </div>
    </div>
  )
}

export default Logo;
