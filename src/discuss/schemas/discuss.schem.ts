import * as mongoose from 'mongoose'
import { AuthorSchema } from 'src/discuss/schemas/author.schem'

export const DiscussSchema = new mongoose.Schema({
   title: {type: String, required: true},
   desc: {type: String, required: true},
   images: {type: [String]},
   author: AuthorSchema,
   rating: {type: Number, required: true},
   checkByAdmin: {type: Boolean, required: true},
   pollId: {type: String},
   chatId: {type: String, required: true},
   created_at: {type: Date, default: Date.now }

})
