import useAuth from '@/hooks/useAuth';

import logoutIcon from '@/assets/Nav/logout-icon.svg';

import styles from './index.module.scss';

const LogoutButton = ({ size }: { size: number }) => {
  const { checkAuth } = useAuth();

  const logOut = async () => {
    try {
      await fetch(`${import.meta.env.VITE_API}/logout`, {
      credentials: 'include',
      method: 'POST'
    });
    checkAuth();
    }
    catch (e) {
      console.error('Logout failed: ', e);
    }
  }

  return (
    <button className={styles.container} onClick={logOut} aria-label='log out'>
      <img 
        src={logoutIcon} 
        alt="" 
        className={styles.icon}
        style={ {width: size + 'px' }}
      />
    </button>
  )
}

export default LogoutButton;