import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserType } from '@/types/auth';
import { ChatCardType } from '@/types/chats';
import useAuth from '@/hooks/useAuth';
import Avatar from '@/components/Avatar';

import styles from './chat-card.module.scss';

const ChatCard = ({data}: {data: ChatCardType}) => {
  const { user } = useAuth();

  const navigate = useNavigate();

  const [chatPartner, setChatPartner] = useState<UserType | null>(null);

  useEffect(() => {
    if (user) {
      const other = data.participants.find(person => person._id !== user._id ) || null;
      setChatPartner(other);
    }
  }, []);

  return (
    chatPartner &&
    <div 
      className={styles.container}
      onClick={() => navigate(`/chat/${data._id}`)}
    >
      <Avatar size={48} image={chatPartner.avatar}/>
      <div className={styles.username}>{ chatPartner.username }</div>
    </div>
  )
}

export default ChatCard;