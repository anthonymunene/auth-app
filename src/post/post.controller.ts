import * as express from "express";
import Post from "./post.interface";
import postModel from "./post.model"
import Controller from '../interfaces/controller.interface'
import PostNotFoundException from './postNotFound.exception'
class PostsController implements Controller {
  public path = "/posts";
  public router = express.Router();

  private post  = postModel

  constructor() {
    this.intializeRoutes();
  }

  public intializeRoutes() {
    this.router.get(this.path, this.getAllPosts);
    this.router.post(this.path, this.createPost);
  }

  private getAllPosts = async(req: express.Request, res: express.Response) => {
    const posts = await this.post.find()
    
    res.send(posts)
  }
  private createPost = (req: express.Request, res: express.Response) => {
    const postData: Post = req.body
    const createdPost = new postModel(postData)
      createdPost.save()
          .then(savedPost => {
            res.send(savedPost)
          })
  }

  private getPostById = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const id = request.params.id;
    const post = await this.post.findById(id);
    if (post) {
      response.send(post);
    } else {
      next(new PostNotFoundException(id));
    }
  }
}

export default PostsController;
