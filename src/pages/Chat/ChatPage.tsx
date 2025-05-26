import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Header from './components/Header';
import useAuth from '../../hooks/useAuth';
import { UserType } from '../../types/auth';
import Loading from '../../components/Loading';
import InputBar from './components/InputBar';

import styles from './chatpage.module.scss';

const ChatPage = () => {
  const { user } = useAuth();
  
  const location = useLocation();
  const chatId = location.pathname.split('/')[location.pathname.split('/').length - 1];

  const [chatData, setChatData] = useState();
  const [chatPartner, setChatPartner] = useState<UserType | null>(null);


  const fetchChat = async () => {
    try {
      const res = await fetch(`http://localhost:5000/chats/${chatId}`);

      if (!res.ok) {
        return;
      }

      const json = await res.json();

      if (user) {
        const other = json.participants.find((person: UserType) => person._id !== user._id ) || null;
        console.log(json.participants)
        setChatPartner(other);
      }

      setChatData(json);
    }
    catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchChat();
  }, []);

  if (chatData && chatPartner) {
    return (
      <div className={styles.container}>
        <Header username={chatPartner.username}/>
        <InputBar />
      </div>
    )
  }

  return <Loading />;
};

export default ChatPage;