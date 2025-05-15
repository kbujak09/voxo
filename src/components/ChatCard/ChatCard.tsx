import { ChatCardType } from '../../types/chats';

import styles from './chatcard.module.scss';

const ChatCard = ({data}: {data: ChatCardType}) => {
  return (
    <div className={styles.container}>
      {data._id}
    </div>
  )
}

export default ChatCard;