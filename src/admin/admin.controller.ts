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
  parseXML(@UploadedFile() file: File): Promise<boolean> {
    return this.adminService.checkFile(file);
  }
}
