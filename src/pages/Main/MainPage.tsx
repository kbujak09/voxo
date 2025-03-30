import { useState } from 'react';

import { PagesType } from '../../types/main';

import MainHeader from '../../components/MainHeader';
import Nav from '../../components/Nav';

import styles from './mainPage.module.scss';

const Main = () => {
  const [page, setPage] = useState<PagesType>('Chats');

  const handlePageChange = (page: PagesType) => {
    setPage(page);
  }

  return (
    <div className={styles.container}>
      <MainHeader page={page}/>
      <Nav onNavClick={handlePageChange} chosenPage={page} />  
    </div>
  )
}

export default Main;