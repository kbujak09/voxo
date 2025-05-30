import logoutIcon from '../../assets/logout-icon.svg';
import useAuth from '../../hooks/useAuth';

import styles from './logoutButton.module.scss';

const LogoutButton = ({ size }: { size: number }) => {
  const { checkAuth } = useAuth();

  const logOut = async () => {
    await fetch('http://localhost:5000/logout', {
      credentials: 'include',
      method: 'POST'
    });
    checkAuth();
  }

  return (
    <div className={styles.container}>
      <img 
        src={logoutIcon} 
        alt="log out button" 
        className={styles.icon}
        style={{width: `${size}px`}}
        onClick={logOut}
      />
    </div>
  )
}

export default LogoutButton;