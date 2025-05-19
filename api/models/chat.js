import mongoose from 'mongoose';

const { Schema } = mongoose;

const ChatSchema = new Schema({
  participants: [{ type: Schema.Types.ObjectId, ref: 'User', required: true }],
  messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }],
  chatType: { type: String, enum: ['private', 'group'], default: 'private' },
  lastMessage: { type: Schema.Types.ObjectId, ref: 'Message', default: null },
});

export default mongoose.model('Chat', ChatSchema);