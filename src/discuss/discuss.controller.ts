import { Controller, Get, Post, Body } from '@nestjs/common';
import { IDiscuss } from './interfaces/discuss.interface';
import { CreateDiscussDto } from './dto/createDiscuss.dto'
import { DiscussService } from './discuss.service';

@Controller('discuss')
export class DiscussController {

    constructor(private readonly discussService: DiscussService) {}

    @Get('/getAll')
    async getAllDiscusses(): Promise<IDiscuss[]> {
        return await this.discussService.getAllDiscuss()
    }

    @Post('')
    async createDiscuss(@Body() createDiscussDto: CreateDiscussDto): Promise<IDiscuss> {
        return await this.discussService.createDiscuss(createDiscussDto)
    }
}
