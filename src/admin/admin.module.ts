import { Module, forwardRef } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { UserModule } from 'src/user/user.module';

@Module({
  controllers: [AdminController],
  providers: [AdminService],
  imports: [UserModule],
})
export class AdminModule {}
