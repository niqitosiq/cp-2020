import { Document } from 'mongoose';

export interface IDiscuss extends Document {
  readonly desc: string;
  readonly pollId?: string;
}
