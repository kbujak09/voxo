import passport from 'passport';
import bcrypt from 'bcryptjs';
import passportJWT from 'passport-jwt';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as JWTStrategy, ExtractJwt as ExtractJWT } from 'passport-jwt';
import User from '../models/user.js';

import dotenv from 'dotenv';
dotenv.config();

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await User.findOne({ username: username });

      if (!user) {
        return done(null, false, { message: 'User not found.' });
      }

      const match = await bcrypt.compare(password, user.password);

      if (!match) {
        return done(null, false, { message: 'Incorrect password.' });
      }

      return done(null, user);
    }
    catch (err) {
      return done(err);
    }
  })
);

passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
},
  async (token, done) => {
    try {
      return done(null, token);
    }
    catch (err) {
      return done(err);
    }
  }
));
