import asyncHandler from 'express-async-handler';
import Chat from '../models/chat.js';

export const createChat = asyncHandler(async (req, res, next) => {
  try {
    const participants = [ '67c47c7075c91c4cadf97447',
      '67bf3139b857b378738f53f0'
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
      .populate('participants', 'username online')
      .populate('lastMessage')
      .exec();

    res.json(chats);
  }
  catch (err) {
    res.status(500).json({ 'error': 'Error while fetcing chats'});
  }
})

