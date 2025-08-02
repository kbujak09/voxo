import { useNavigate } from 'react-router-dom';

import { PagesType } from '@/types/main';

import Header from './components/Header';
import Nav from './components/Nav';
import Chats from '@/pages/Chats';
import People from '@/pages/People';

import styles from './index.module.scss';

interface MainPageProps {
  page: PagesType;
}

const Main = ({ page }: MainPageProps) => {
  const navigate = useNavigate();

  const handlePageChange = (newPage: PagesType) => {
    navigate(`/${newPage.toLowerCase()}`);
  };

  return (
    <div className={styles.container}>
      <Header page={page} />
      <div className={styles.content}>
        <div style={{ display: page === 'Chats' ? 'block' : 'none' }}>
          <Chats />
        </div>
        <div style={{ display: page === 'People' ? 'block' : 'none' }}>
          <People />
        </div>
        <div style={{ display: page === 'Menu' ? 'block' : 'none' }}>
          <div>tbd</div>
        </div>
      </div>
      <Nav onNavClick={handlePageChange} chosenPage={page} />
    </div>
  );
};

export default Main;