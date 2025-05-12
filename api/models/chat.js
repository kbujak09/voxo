import mongoose from 'mongoose';
import MessageSchema from './message';

const { Schema } = mongoose;

const ChatSchema = new Schema({
  participants: [{ type: Schema.Types.ObjectId, ref: 'User', required: true }],
  messages: [ MessageSchema ],
  chatType: { type: String, enum: ['private', 'group'], default: 'private' },
  lastMessage: { type: Schema.Types.ObjectId, ref: 'Message' },
});

export default mongoose.model('Chat', ChatSchema);