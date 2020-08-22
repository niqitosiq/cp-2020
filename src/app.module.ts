import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { BallotModule } from './ballot/ballot.module';
import { AdminModule } from './admin/admin.module';
import { DiscussModule } from './discuss/discuss.module';
import { UserService } from './user/user.service';

const enviroment = process.env.NODE_ENV || 'development';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${enviroment}`,
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB_WRITE_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    UserModule,
    BallotModule,
    AdminModule,
    DiscussModule,
  ],
})
export class AppModule {}
