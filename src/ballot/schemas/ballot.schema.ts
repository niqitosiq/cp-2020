import * as mongoose from 'mongoose';

export const BallotSchema = new mongoose.Schema({
    candidates:  { type: [String], required: true }
})