import * as mongoose from 'mongoose'

export const AuthorSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    avatar: {type: String, required: true}
 })
