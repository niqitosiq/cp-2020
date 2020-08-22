import { Document } from 'mongoose';
import { IAuthor } from "./author.interface";
import { IMessage } from './message.interface'

export interface IDiscuss extends Document {
    readonly title: string;
    readonly desc: string;
    readonly images: [string];
    readonly author: IAuthor;
    readonly rating: number;
    readonly checkByAdmin: boolean;
    readonly pollId?: string;
    readonly chatId: string;
    readonly messages: [IMessage]
    readonly created_at: Date;

}