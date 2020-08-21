import * as mongoose from 'mongoose';
import { genderEnum } from '../enums/gender.enum';
import { roleEnum } from '../enums/role.enum';

export const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  avatar: { type: String, default: null },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  gender: { type: String, required: true, enum: Object.values(genderEnum) },
  address: { type: String },
  profession: {
    type: String,
    default: null,
  },
  phone: { type: String, required: true },
  role: { type: [String], required: true, enum: Object.values(roleEnum) },
  password: { type: String, required: true },
});

UserSchema.index({ phone: 1 }, { unique: true });