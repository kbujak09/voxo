import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.set('strictQuery', false);

const mongoDB = process.env.DB_KEY;

async function connectDB() {
  try {
    await mongoose.connect(mongoDB);
    console.log('Connected to MongoDB');
  } 
  catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
}

export default connectDB;
