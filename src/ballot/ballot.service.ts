import { Injectable } from '@nestjs/common';
import * as Chain from '@christopy/chaindb';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { IVoteBlock } from 'src/ballot/interfaces/voteBlock.interface';
import { IBallot } from 'src/ballot/interfaces/ballot.interface';
import { voteDto } from './dto/voteDto.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class BallotService {
  constructor(
    @InjectModel('Ballot') private readonly ballotModel: Model<IBallot>,
    private userService: UserService,
  ) {}

  initChain(id: string): void {
    const total = { X: 0, Y: 0, N: 0 };

    Chain.New(`Chaindb-ballot-${id}`);
    Chain.Add(`${id}`, {
      total,
      user: 'system-initial-voting',
    });
  }

  async create(): Promise<any> {
    const currentBallot = new this.ballotModel();

    const id = currentBallot._id;

    this.initChain(id);

    return await currentBallot.save();
  }

  async vote(currVote: voteDto): Promise<any> {
    const { total } = JSON.parse(Chain.Last(`${currVote.pollId}`)) || {
      total: { X: 0, Y: 0, N: 0 },
    };
    const uid = currVote.userId;
    const userData = await this.userService.findById(currVote.userId);

    const voteValue = userData.voteValue;
    const vote = currVote.vote;

    total[currVote.vote] += voteValue;

    const voteObject: IVoteBlock = {
      uid,
      vote,
      voteValue,
      total,
    };

    Chain.Add(currVote.pollId, voteObject);

    return await voteObject;
  }

  async getAll(id: string): Promise<any> {
    return Chain.All(id);
  }

  async getLast(id: string): Promise<any> {
    return Chain.Last(id);
  }
}
