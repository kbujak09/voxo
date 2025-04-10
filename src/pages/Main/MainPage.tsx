import { useState } from 'react';

import { PagesType } from '../../types/main';

import MainHeader from '../../components/MainHeader';
import Nav from '../../components/Nav';
import Chats from '../../components/Chats';

import styles from './mainPage.module.scss';

const Main = () => {
  const [page, setPage] = useState<PagesType>('Chats');

  const handlePageChange = (page: PagesType) => {
    setPage(page);
  }

  const renderChosenPage = () => {
    switch (page) {
      case 'Chats':
        return <Chats />
      case 'People':
        return <div>tbd</div>
      case 'Menu':
        return <div>tbd</div>
    }
  }

  return (
    <div className={styles.container}>
      <MainHeader page={page}/>
      { 
      renderChosenPage()
      }
      <Nav onNavClick={handlePageChange} chosenPage={page} />  
    </div>
  )
}

export default Main;