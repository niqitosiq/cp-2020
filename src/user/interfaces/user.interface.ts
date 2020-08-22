import { Document } from 'mongoose';

export interface IUser extends Document {
  readonly avatar: string;
  readonly name: string;
  readonly phone: string;
  readonly voteValue: number;
}
