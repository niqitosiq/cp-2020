import { IAuthor } from "../interfaces/author.interface";

export class CreateDiscussDto {
    readonly title: string;
    readonly desc: string;
    readonly images: [string];
    readonly author: IAuthor;
    readonly rating: number;
    readonly checkByAdmin: boolean;
    readonly pollId: string;
    readonly chatId: string;
}