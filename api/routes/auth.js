import express from 'express';
const router = express.Router();

import * as authController from '../controllers/authController.js';

router.post('/signup', authController.signup);

router.post('/login', authController.login);

router.get('/auth', authController.checkAuth);

export default router;
