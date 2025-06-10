import asyncHandler from 'express-async-handler';
import Chat from '../models/Chat.js';

export const createChat = asyncHandler(async (req, res, next) => {
  try {
    const { participants } = req.body;

    if (!participants || !Array.isArray(participants || participants.length < 2)) {
      return res.status(400).json({ error: 'At least two participant IDs are required.'});
    }

    const existingChat = await Chat.findOne({
      participants: { $all: participants, $size: participants.length },
    });

    if (existingChat) {
      return res.status(200).json(existingChat);
    }

    const chat = new Chat({
      participants: participants
    });

    await chat.save();

    res.status(201).json({ message: 'Chat created successfully!' });
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