import { IAuthor } from "./author.interface";

export interface IMessage {
    readonly author: IAuthor;
    readonly text: string;
}