import { useNavigate } from 'react-router-dom';

import backButton from '@/assets/Nav/back-button.svg';
import Avatar from '@/components/Avatar';

import styles from './header.module.scss';

const Header = ({ username }: {username: string}) => {
  const navigate = useNavigate();

  console.log(username)

  return (
    <div className={styles.container}>
      <img 
        src={backButton} 
        alt="back-button" 
        className={styles.back}
        onClick={() => navigate(-1)}
      />
      <Avatar size={36} image=''/>
      <div className={styles.username}>
        {username}
      </div>
    </div>
  )
};

export default Header;