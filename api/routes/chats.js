import express from 'express';
const router = express.Router();

import * as chatController from '../controllers/chatController.js';

router.post('/chats', chatController.createChat);

router.get('/chats', chatController.getChats);

export default router;