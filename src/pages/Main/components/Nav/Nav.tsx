import NavButton from '../NavButton';

import { PagesType } from '../../../../types/main';

import chatsIcon from '../../../../assets/chats-icon.svg';
import peopleIcon from '../../../../assets/people-icon.svg';
import menuIcon from '../../../../assets/menu-icon.svg';

import styles from './nav.module.scss';

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