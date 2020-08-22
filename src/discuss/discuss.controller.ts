import { Controller, Get, Post, Body } from '@nestjs/common';
import { IDiscuss } from './interfaces/discuss.interface';
import { CreateDiscussDto } from './dto/createDiscuss.dto'
import { DiscussService } from './discuss.service';
import { SendMessageDto } from './dto/sendMessage.dto';

@Controller('discuss')
export class DiscussController {

    constructor(private readonly discussService: DiscussService) {}

    @Get('/getAll')
    async getAllDiscusses(): Promise<IDiscuss[]> {
        return await this.discussService.getAllDiscuss()
    }

    @Post('/create')
    async createDiscuss(@Body() createDiscussDto: CreateDiscussDto): Promise<IDiscuss> {
        return await this.discussService.createDiscuss(createDiscussDto)
    }

    @Post('/send')
    async sendMessage(@Body() sendMessageDto: SendMessageDto): Promise<IDiscuss> {
        return await this.discussService.addMessage(sendMessageDto)
    }
}
