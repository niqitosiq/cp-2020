import { IMessage } from '../interfaces/message.interface'

export class SendMessageDto {
    readonly message: IMessage;
    readonly id: string;
}