import * as mongoose from 'mongoose';

export const DiscussSchema = new mongoose.Schema({
  desc: { type: String, required: false },
  pollId: { type: String },
});
