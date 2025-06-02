import asyncHandler from 'express-async-handler';
import FriendRequest from '../models/FriendRequest.js';

export const createFriendRequest = asyncHandler(async (req, res, next) => {
  try {
    const { from, to } = req.body;

    if (!from || !to) {
      return res.status(400).json({ 'error': 'Friend request need both from and to.' });
    }

    const existingRequest = await FriendRequest.findOne({ from, to });

    if (existingRequest) {
      return res.status(200).json(existingRequest);
    }

    const request = new FriendRequest({ from, to });

    await request.save();

    res.status(201).json({ message: 'Friend request created successfully!' });
  }
  catch (err) {
    res.status(500).json({ 'error': 'Error while creating new friend request' });
    console.error(err);
  }
});

export const getReceivedRequests = asyncHandler(async (req, res, next) => {
  const { userId } = req.params;

  if (!userId) {
    throw new Error('No userId specified while fetching received friend requests.');
  }
});