import { Module } from '@nestjs/common';
import { BallotController } from './ballot.controller';
import { BallotService } from './ballot.service';

import { MongooseModule } from '@nestjs/mongoose';
import { BallotSchema } from './schemas/ballot.schema';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Ballot', schema: BallotSchema }]),
    UserModule,
  ],
  controllers: [BallotController],
  providers: [BallotService],
  exports: [BallotService],
})
export class BallotModule {}
