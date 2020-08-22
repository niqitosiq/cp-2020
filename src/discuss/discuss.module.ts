import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { DiscussService } from './discuss.service';
import { DiscussController } from './discuss.controller';
import { DiscussSchema } from './schemas/discuss.schem';
import { BallotModule } from 'src/ballot/ballot.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Discuss', schema: DiscussSchema }]),
    BallotModule,
  ],
  providers: [DiscussService],
  controllers: [DiscussController],
})
export class DiscussModule {}
