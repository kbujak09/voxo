import asyncHandler from 'express-async-handler';
import User from '../models/user.js';

export const getUserById = asyncHandler(async (req, res, next) => {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.status(200).json(user);
  }
  catch (err) {
    res.status(500).json({ 'error': `Error while fetching user by ID: ${err.message}` });
  }
});

export const getUserByUsername = asyncHandler(async (req, res, next) => {
  try {
    const { username } = req.params;

    const user = await User.findOne({ username: username });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.status(200).json(user);
  }
  catch (err) {
    res.status(500).json({ 'error': `Error while fetching user by username: ${err.message}` });
  }
});

export const getUsers = asyncHandler(async (req, res, next) => {
  try {
    const users = await User.find();

    return res.status(200).json(users);
  }
  catch (err) {
    res.status(500).json({ 'error': `Error while fetching all users: ${err.message}` });
  }
});

export const getSuggestedUsers = asyncHandler(async (req, res, next) => {
  const { userId } = req.params;
  
  if (!userId) {
    throw new Error('No userId provided while fetching suggested users');
  }

  const suggestedUsers = await User.find({
    friends: { $ne: userId },
    _id: { $ne: userId }
  })
  .select('username avatar');

  res.status(200).json(suggestedUsers);
});

export const getRandomSuggestedUsers = asyncHandler(async (req, res, next) => {
  const { userId } = req.params;
  
  if (!userId) {
    throw new Error('No userId provided while fetching suggested users');
  }

  const suggestedUsers = await User.aggregate([
    {
      $match: {
        friends: { $ne: userId },
        _id: { $ne: userId }
      }
    },
    { $sample: { size: 3 } },
    { $project: { username: 1, avatar: 1 } }
  ]);

  res.status(200).json(suggestedUsers);
});

export const getUserFriends = asyncHandler(async (req, res, next) => {
  const { userId } = req.params;

  if (!userId) {
    res.status(400);
    throw new Error('No userId provided while fetching user friends');
  }

  const user = await User.findById(userId).populate('friends', 'username avatar online');

  if (!user) {
    res.status(404);
    throw new Error('User not found');
  } 

  res.status(200).json(user.friends);
});