import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  avatar: { type: String, default: null, unique: false },
  name: { type: String, required: true, unique: false },
  phone: { type: String, required: true, unique: false },
  voteValue: { type: Number, required: true, unique: false },
});
