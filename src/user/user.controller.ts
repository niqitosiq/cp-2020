import { Controller, Param, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

import { IUser } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('')
  async getUsers(): Promise<IUser> {
    return await this.userService.all();
  }

  @Get('/totalArea')
  async getTotalArea(): Promise<number> {
    return await this.userService.getTotalArea();
  }

  @Get('/getById/:id')
  async getUserById(@Param('id') id: string): Promise<IUser> {
    return await this.userService.findById(id);
  }

  @Get('/getByPhone/:phone')
  async getUserByPhone(@Param('phone') phone: string): Promise<IUser> {
    return await this.userService.findByPhone(phone);
  }

  @Post('')
  async createUser(@Body() createUserDto: CreateUserDto): Promise<IUser> {
    return await this.userService.create(createUserDto);
  }
}
