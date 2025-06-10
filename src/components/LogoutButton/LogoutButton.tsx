import logoutIcon from '../../assets/logout-icon.svg';
import useAuth from '../../hooks/useAuth';

import styles from './logout-button.module.scss';

const LogoutButton = ({ size }: { size: number }) => {
  const { checkAuth } = useAuth();

  const logOut = async () => {
    await fetch(`${import.meta.env.VITE_API}/logout`, {
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