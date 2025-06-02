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
  try {
    const { userId } = req.params;

    const users = await User.find({});
  }
  catch (err) {
    res.status(500).json({ 'error': `Error while fetching suggested users: ${err.message}` });
  }
});
