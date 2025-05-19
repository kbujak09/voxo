import { useState } from 'react';

import { PagesType } from '../../types/main';

import Header from './components/Header';
import Nav from './components/Nav';
import Chats from './components/Chats';

import styles from './mainPage.module.scss';

const Main = () => {
  const [page, setPage] = useState<PagesType>('Chats');

  const handlePageChange = (page: PagesType) => {
    setPage(page);
  }

  return (
    <div className={styles.container}>
      <Header page={page}/>
      <div className={styles.content}>
        <div style={{ display: page === 'Chats' ? 'block' : 'none' }}>
          <Chats />
        </div>
        <div style={{ display: page === 'People' ? 'block' : 'none' }}>
          <div>tbd</div>
        </div>
        <div style={{ display: page === 'Menu' ? 'block' : 'none' }}>
          <div>tbd</div>
        </div>
      </div>
      <Nav onNavClick={handlePageChange} chosenPage={page} />  
    </div>
  )
}

export default Main;