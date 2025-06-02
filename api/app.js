import express from 'express';
import connectDB from './db.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import usersRouter from './routes/users.js';
import authRouter from './routes/auth.js';
import chatsRouter from './routes/chats.js';
import friendRequestsRouter from './routes/friendRequests.js';

import './auth/auth.js';

const app = express();
const PORT = 5000;

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

connectDB();

app.listen(PORT, (error) => {
  if (!error) {
    console.log(`App listening on port: ${PORT}`);
  } else {
    console.log("Error occurred, server can't start");
  }
});

app.use('/', usersRouter);

app.use('/', authRouter);

app.use('/', chatsRouter);

app.use('/', friendRequestsRouter);