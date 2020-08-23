import { Document } from 'mongoose';

export interface IUser extends Document {
  forEach(arg0: (user: any) => void);
  readonly avatar: string;
  readonly name: string;
  readonly phone: string;
  readonly voteValue: number;
}
