import { Module } from '@nestjs/common';
import { BallotController } from './ballot.controller';
import { BallotService } from './ballot.service';

@Module({
  controllers: [BallotController],
  providers: [BallotService]
})
export class BallotModule {}
