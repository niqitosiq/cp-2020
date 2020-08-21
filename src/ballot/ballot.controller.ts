import { Controller, Post } from '@nestjs/common';
import { BallotService } from './ballot.service';

@Controller('ballot')
export class BallotController {
  constructor(private readonly ballotService: BallotService) {}

  @Post('/create')
  createBallot(): any {
    return this.ballotService.create();
  }
}
