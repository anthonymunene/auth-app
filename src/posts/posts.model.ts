import * as mongoose from 'mongoose'
import Post from './posts.interface'

const postsSchema =  new mongoose.Schema({
    author: String,
    content: String,
    title: String
})

const postsModel = mongoose.model<Post & mongoose.Document>('Post', postsSchema)


export default postsModel