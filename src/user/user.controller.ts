import { Controller, Param, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service'

import { IUser } from './interfaces/user.interface'
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Get('/:id')
    async getUser(@Param('id') id: string): Promise<IUser> {
        return await this.userService.find(id)
    }
    
    @Post('')
    async createUser(@Body() createUserDto: CreateUserDto, roles: Array<string>): Promise<IUser> {
        return await this.userService.create(createUserDto, roles)
    }

}
