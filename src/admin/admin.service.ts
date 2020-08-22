import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {
  checkFile(file: File): any {
    console.log(file);
    return {
      status: true,
    };
  }
}
