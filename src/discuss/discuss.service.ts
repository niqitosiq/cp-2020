import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { IDiscuss } from './interfaces/discuss.interface'
import {CreateDiscussDto} from './dto/createDiscuss.dto'
import { SendMessageDto } from './dto/sendMessage.dto';

@Injectable()
export class DiscussService {

    constructor(@InjectModel('Discuss') private readonly discussModel: Model<IDiscuss>) {}

    async createDiscuss(createDiscussDto: CreateDiscussDto): Promise<IDiscuss> {
        const createDiscuss = new this.discussModel(createDiscussDto);
        return await createDiscuss.save()
    }

    async getAllDiscuss(): Promise<IDiscuss[]> {
        return await this.discussModel.find().exec()
    }

    async getById(id: string): Promise<IDiscuss> {
        return await this.discussModel.findById(id).exec()
    }

    async addMessage(sendMessageDto: SendMessageDto): Promise<IDiscuss> {
        const id = sendMessageDto.id;

        const discuss = await this.getById(id);
        discuss.messages.push(sendMessageDto.message);
        
        return discuss.save()
    }
}
