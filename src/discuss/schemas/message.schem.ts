import * as mongoose from 'mongoose'
import { AuthorSchema } from 'src/discuss/schemas/author.schem'

export const MessagesSchema = new mongoose.Schema({
    author: AuthorSchema,
    text: {type: String, required: true}
 })
