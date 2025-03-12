const express = require('express');
const connectDB = require('./db');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');

require('./auth/auth.js');

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
  }
  else {
    console.log("Error occurred, server can't start");
  }
});

app.use('/', usersRouter);
app.use('/', authRouter);