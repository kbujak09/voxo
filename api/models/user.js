import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema({
  username: { type: String, required: true, maxLength: 16, minLength: 3 },
  password: { type: String, required: true, minLength: 8 },
  online: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.model('User', UserSchema);
