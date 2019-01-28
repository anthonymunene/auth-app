import HttpException from '../exceptions/HttpException'

class PostnotFoundException extends HttpException {
 constructor(id: string) {
     super(404, `Post with id ${id} not found`)
 }   
}

export default PostnotFoundException