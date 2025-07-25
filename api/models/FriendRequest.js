import mongoose from "mongoose";

const { Schema } = mongoose;

const FriendRequestSchema = new Schema({
  from: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  to: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  status: {
    type: String,
    enum: ['pending', 'accepted', 'declined'],
    default: 'pending'
  }
}, { timestamps: true });

export default mongoose.model('FriendRequest', FriendRequestSchema);