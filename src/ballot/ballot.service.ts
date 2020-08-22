import { Injectable } from '@nestjs/common';
import * as Chain from '@christopy/chaindb';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { IVoteBlock } from 'src/ballot/interfaces/voteBlock.interface';
import { IBallot } from 'src/ballot/interfaces/ballot.interface';
import { CreateBallotDto } from './dto/createBallotDto.dto';
import { voteDto } from './dto/voteDto.dto';

@Injectable()
export class BallotService {
  constructor(
    @InjectModel('Ballot') private readonly ballotModel: Model<IBallot>,
  ) {}

  async create(createBallotDto: CreateBallotDto): Promise<any> {
    const currentBallot = new this.ballotModel(createBallotDto);

    const id = currentBallot._id;

    const total = {};

    currentBallot.candidates.forEach(candidate => {
      total[candidate] = 0;
    });

    Chain.New(`Chaindb-ballot-${id}`);
    Chain.Add(`${id}`, {
      total,
      user: 'system-initial-voting',
    });

    return await currentBallot.save();
  }

  async vote(currVote: voteDto): Promise<any> {
    const { total } = JSON.parse(Chain.Last(`${currVote.id}`));
<<<<<<< HEAD
    console.log(total);
    const uid = currVote.userId;
    const voteValue = currVote.voteValue;
=======

    const uid = currVote.user['_id'];
    const voteValue = currVote.user.voteValue;
>>>>>>> de9efaf4ca7a6310db346bf39c4a31c8b806c2b9
    const vote = currVote.vote;

    total[currVote.vote] += voteValue;

    const voteObject: IVoteBlock = {
      uid,
      vote,
      voteValue,
      total,
    };

    Chain.Add(currVote.id, voteObject);

    return await voteObject;
  }

  async getAll(id: string): Promise<any> {
    return await Chain.All(id);
  }

  async getLast(id: string): Promise<any> {
    return await Chain.Last(id);
  }
}
