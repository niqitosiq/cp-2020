import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as _ from 'lodash';

import { IUser } from './interfaces/user.interface';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<IUser>) {}

  async create(
    createUserDto: CreateUserDto,
    roles: Array<string>,
  ): Promise<IUser> {
    const createUser = new this.userModel(
      _.assignIn(createUserDto, { password: createUserDto.password, roles }),
    );
    return await createUser.save();
  }
  async findById(id: string): Promise<IUser> {
    return await this.userModel.findById(id).exec();
  }
  async findByPhone(phone: string): Promise<IUser> {
    return await this.userModel.findById(phone).exec();
  }
}
