import asyncHandler from 'express-async-handler';
import Chat from '../models/chat.js';

export const createChat = asyncHandler(async (req, res, next) => {
  try {
    const participants = [ '682731fd47d9b9cfaf8e1c57',
      '682755872648e6e765aba9b2'
     ]

    const chat = new Chat({
      participants: participants
    });

    await chat.save();

    res.json()
  }
  catch (err) {
    res.status(500).json({ 'error': 'Error while creating new chat'})
  }
});

export const getChats = asyncHandler(async (req, res, next) => {
  try {
    const { userId } = req.query;

    const chats = await Chat.find({ participants: userId })
      .populate('participants', 'username online avatar');

    const populatedChats = await Promise.all(
      chats.map(async (chat) => {
        if (chat.lastMessage) {
          await chat.populate('lastMessage');
        }
        return chat;
      })
    );

    res.json(populatedChats);
  }
  catch (err) {
    res.status(500).json({ 'error': 'Error while fetching chats'});
  }
});

export const getChat = asyncHandler(async (req, res, next) => {
  try {
    const { chatId } = req.params;

    const chat = await Chat.findById(chatId).populate('participants', 'username online avatar');

    if (!chat) {
      return res.status(404).json({ error: 'Chat not found' });
    }

    if (chat.messages?.length > 0) {
      await chat.populate('messages');
    }

    if (chat.lastMessage) {
      await chat.populate('lastMessage');
    }

    res.json(chat);
  } 
  catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error while fetching chat data' });
  }
});


