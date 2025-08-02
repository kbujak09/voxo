import NavButton from './components/NavButton';

import { PagesType } from '@/types/main';

import chatsIcon from '@/assets/Nav/chats-icon.svg';
import peopleIcon from '@/assets/Nav/people-icon.svg';
import menuIcon from '@/assets/Nav/menu-icon.svg';

import styles from './index.module.scss';

type Props = {
  onNavClick: (page: PagesType) => void,
  chosenPage: PagesType
}

const Nav = ({ onNavClick, chosenPage }: Props) => {
  return (
    <nav className={styles.container}>
      <NavButton 
        text='Chats' 
        image={chatsIcon} 
        onClick={() => onNavClick('Chats')} 
        isActive={chosenPage === 'Chats' ? true : false}
      />
      <NavButton 
        text='People' 
        image={peopleIcon} 
        onClick={() => onNavClick('People')} 
        isActive={chosenPage === 'People' ? true : false}
      />
      <NavButton 
        text='Menu' 
        image={menuIcon} 
        onClick={() => onNavClick('Menu')} 
        isActive={chosenPage === 'Menu' ? true : false}
      />
    </nav>
  )
}

export default Nav;