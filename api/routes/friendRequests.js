import express from 'express';

const router = express.Router();

import * as friendRequestController from '../controllers/friendRequestController.js';

router.post('/requests', friendRequestController.createFriendRequest);

router.get('/requests/:userId/received', friendRequestController.getReceivedRequests);

router.get('/requests/:userId/sent', friendRequestController.getSentRequests);

router.put('/requests/:requestId', friendRequestController.updateRequest);

router.delete('/requests/:requestId', friendRequestController.cancelRequest);

export default router;