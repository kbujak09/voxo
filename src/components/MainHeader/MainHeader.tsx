import LogoutButton from '../LogoutButton';

import styles from './mainHeader.module.scss';

const MainHeader = ({ page }: { page: string }) => {
  return (
    <div className={styles.container}>
      <div className={styles.page}>
        { page }
      </div>
      <LogoutButton size={24}/>
    </div>
  )
};

export default MainHeader;