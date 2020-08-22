import { Module } from '@nestjs/common';
import { BallotController } from './ballot.controller';
import { BallotService } from './ballot.service';

import { MongooseModule } from '@nestjs/mongoose';
import { BallotSchema } from './schemas/ballot.schema';

@Module({
  imports: [MongooseModule.forFeature( [ {name: 'Ballot', schema: BallotSchema} ] ) ],
  controllers: [BallotController],
  providers: [BallotService],
})
export class BallotModule {}
