import { useEffect, useState } from 'react';

import useAuth from '../../../../hooks/useAuth';
import ChatCard from './components/ChatCard';
import { ChatCardType } from '../../../../types/chats';

import styles from './chats.module.scss';

const Chats = () => {
  const { user } = useAuth();

  const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    try {
      if (!user) {
        return;
      }

      const res = await fetch(`http://localhost:5000/chats?userId=${user._id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!res.ok) {
        return;
      }

      const json = await res.json();

      setChats(json);
    }
    catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div className={styles.container}>
      {
        chats.map((chat: ChatCardType) => {
          return (
            <ChatCard key={chat._id} data={chat}/>
          )
        })
      }
    </div>
  )
}

export default Chats;