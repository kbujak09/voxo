import asyncHandler from 'express-async-handler';
import FriendRequest from '../models/FriendRequest.js';
import User from '../models/user.js';

export const createFriendRequest = asyncHandler(async (req, res, next) => {
  const { from, to } = req.body;

  if (!from || !to) {
    throw new Error('Friend request need both from and to.');
  }

  const existingRequest = await FriendRequest.findOne({ from, to });

  if (existingRequest) {
    return res.status(200).json(existingRequest);
  }

  const request = new FriendRequest({ from, to });

  await request.save();

  res.status(201).json({ message: 'Friend request created successfully!' });
});

export const getReceivedRequests = asyncHandler(async (req, res, next) => {
  const { userId } = req.params;

  if (!userId) {
    throw new Error('userId must be provided in getReceivedRequests function');
  }

  const receivedRequests = await FriendRequest.find({ to: userId });

  res.status(201).json(receivedRequests);
});

export const getSentRequests = asyncHandler(async (req, res, next) => {
  const { userId } = req.params;

  if (!userId) {
    throw new Error('userId must be provided in getSentRequests function');
  }

  const sentRequests = await FriendRequest.find({ from: userId });

  res.status(201).json(sentRequests);
});

export const updateRequest = asyncHandler(async (req, res, next) => {
  const { requestId } = req.params;
  const { status } = req.body;
 
  if (!requestId) {
    throw new Error('requestId must be provided in acceptRequest function')
  }

  if (!['accepted', 'declined'].includes(status)) {
    res.status(400);
    throw new Error('Invalid status. Must be "accepted" or "declined"');
  }

  const request = await FriendRequest.findById(requestId);

  if (!request) {
    res.status(404);
    throw new Error(`Request with id: ${requestId} does not exist`);
  }

  request.status = status;
  await request.save();

  if (status === 'accepted') {
    await User.findByIdAndUpdate(request.from, {
      $addToSet: { friends: request.to }
    });

    await User.findByIdAndUpdate(request.to, {
      $addToSet: { friends: request.from }
    });
  }

  res.status(200).json({
    message: `Request: ${requestId} status changed to ${status}`,
    request
  });
});