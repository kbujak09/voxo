import defaultImage from '../../assets/default.jpg';

import styles from './avatar.module.scss';

const Avatar = ({image, size}: {image: string, size: number}) => {
  return (
    <div className={styles.container} style={{ width: size , height: size}}>
      {image.length === 0 ? <img style={{width: size}} src={defaultImage}/> : <img style={{width: size}} src={image}/>}
    </div>
  )
};

export default Avatar;