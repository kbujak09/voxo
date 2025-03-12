import express from 'express';
const router = express.Router();

import * as userController from '../controllers/userController.js';

router.get('/users', userController.getUsers);

router.get('/users/id/:userId', userController.getUserById);

router.get('/users/username/:username', userController.getUserByUsername);

export default router;
