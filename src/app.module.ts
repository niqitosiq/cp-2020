import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';

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
    UserModule
  ],
})
export class AppModule {}
