import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('/xml')
  @UseInterceptors(FileInterceptor('file'))
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  parseXML(@UploadedFile() file): Promise<boolean> {
    return this.adminService.checkFile(file);
  }
}
