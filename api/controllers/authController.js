import jwt from 'jsonwebtoken';
import passport from 'passport';
import { body, validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';
import asyncHandler from 'express-async-handler';
import User from '../models/User.js';

export const signup = [
  body('username')
    .notEmpty()
    .withMessage('Username can not be empty.')
    .custom(value => !/\s/.test(value))
    .withMessage('No spaces are allowed in the username.')
    .trim()
    .isLength({ min: 3 })
    .withMessage('Username must contain at least 3 characters.')
    .isLength({ max: 16 })
    .withMessage('Username can not be longer than 16 characters.')
    .escape(),
  body('password')
    .notEmpty()
    .withMessage('Password can not be empty.')
    .custom(value => !/\s/.test(value))
    .withMessage('No spaces are allowed in the password.')
    .trim()
    .isLength({ min: 8 })
    .withMessage('Password must contain at least 8 characters.')
    .escape(),
  body('confirmPassword', 'Passwords do not match.')
    .custom((value, { req }) => value === req.body.password),

  asyncHandler(async (req, res, next) => {
    const existingUser = await User.findOne({ username: { $regex: new RegExp(`^${req.body.username}$`, 'i') } });

    if (existingUser) {
      return res.status(403).json({
        username: req.body.username,
        errors: [{ message: 'Username is taken' }]
      });
    };

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(403).json({
        username: req.body.username,
        errors: errors.array()
      });
    };

    bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
      const user = new User({
        username: req.body.username,
        password: hashedPassword
      });
      if (err) {
        return next(err);
      }
      else {
        await user.save();
        res.status(200).json({
          message: 'User created successfully!'
        });
      };
    });
  })
];

export const login = (req, res, next) => {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err || !user) {
      return res.status(400).json({
        message: info && info.message ? info.message : 'Login failed',
        user: user,
        err: err ? err.message : null
      });
    }

    const token = jwt.sign(user.toJSON(), process.env.JWT_SECRET, { expiresIn: '24h' });

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 24 * 60 * 60 * 1000,
      sameSite: 'strict'
    });

    return res.status(200).json({ message: 'Login successful', user });
  })(req, res, next);
};

export const checkAuth = asyncHandler(async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token" });
    }
    res.status(200).json({ user: decoded });
  });
});


export const logout = asyncHandler(async (req, res, next) => {
  res.cookie('token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: new Date(0),
    sameSite: 'strict'
  });

  return res.status(200).json({ message: 'Logout successful' });
});