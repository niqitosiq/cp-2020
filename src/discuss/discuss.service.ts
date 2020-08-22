import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { IDiscuss } from './interfaces/discuss.interface';
import { CreateDiscussDto } from './dto/createDiscuss.dto';
import { BallotService } from 'src/ballot/ballot.service';

@Injectable()
export class DiscussService {
  constructor(
    @InjectModel('Discuss') private readonly discussModel: Model<IDiscuss>,
    private ballotService: BallotService,
  ) {}

  async createDiscuss(createDiscussDto: CreateDiscussDto): Promise<IDiscuss> {
    const poll = await this.ballotService.create({
      candidates: ['Y', 'N', 'X'],
    });
    createDiscussDto.pollId = poll.id;
    const createDiscuss = new this.discussModel(createDiscussDto);
    return await createDiscuss.save();
  }

  async getAllDiscuss(): Promise<IDiscuss[]> {
    return await this.discussModel.find().exec();
  }

  async getById(id: string): Promise<IDiscuss> {
    return await this.discussModel.findById(id).exec();
  }
}
