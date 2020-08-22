import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { DiscussService } from './discuss.service';
import { DiscussController } from './discuss.controller';
import { DiscussSchema } from './schemas/discuss.schem';


@Module({
  imports: [MongooseModule.forFeature([{ name: 'Discuss', schema: DiscussSchema }])],
  providers: [DiscussService],
  controllers: [DiscussController]
})
export class DiscussModule {}
