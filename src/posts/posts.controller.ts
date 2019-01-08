import * as express from "express";
import Post from "./posts.interface";
import postModel from "./posts.model"
class PostsController {
  public path = "/posts";
  public router = express.Router();

  private posts: Post[] = [
    {
      author: "Anthony Munene",
      content: "S boook",
      title: "Some title"
    }
  ];

  constructor() {
    this.intializeRoutes();
  }

  public intializeRoutes() {
    this.router.get(this.path, this.getAllPosts);
    this.router.post(this.path, this.createPost);
  }

  getAllPosts = (req: express.Request, res: express.Response) => {
    postModel.find()
        .then(posts => {
          res.send(posts)
        })
    res.send(this.posts)
  }
  createPost = (req: express.Request, res: express.Response) => {
    const postData: Post = req.body
    const createdPost = new postModel(postData)
      createdPost.save()
          .then(savedPost => {
            res.send(savedPost)
          })
  }
}

export default PostsController;
