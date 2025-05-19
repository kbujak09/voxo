import LogoutButton from '../../../../components/LogoutButton';

import styles from './header.module.scss';

const Header = ({ page }: { page: string }) => {
  return (
    <div className={styles.container}>
      <div className={styles.page}>
        { page }
      </div>
      <LogoutButton size={24}/>
    </div>
  )
};

export default Header;