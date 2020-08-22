import { Document } from 'mongoose';

export interface IBallot extends Document {
    readonly candidates: Array<string>;
}