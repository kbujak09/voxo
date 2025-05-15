import mongoose from 'mongoose';

const { Schema } = mongoose;

const ChatSchema = new Schema({
  participants: [{ type: Schema.Types.ObjectId, ref: 'User', required: true }],
  messages: {
    type: [{ type: Schema.Types.ObjectId, ref: 'Message' }],
    default: [],
  },
  chatType: { type: String, enum: ['private', 'group'], default: 'private' },
  lastMessage: {
    type: { 
      type: Schema.Types.ObjectId, 
      ref: 'Message',
      default: null, 
    },
  },
});

export default mongoose.model('Chat', ChatSchema);