import express from 'express';

const router = express.Router();

import * as friendRequestController from '../controllers/friendRequestController.js';

router.post('/requests', friendRequestController.createFriendRequest);

export default router;