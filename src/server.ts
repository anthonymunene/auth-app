import 'dotenv/config'
import App from './app'
import PostsController from './post/post.controller'
import loggerMiddleware  from './middleware/logger'
import errorHandler from './middleware/error'

const PORT = process.env.PORT || 5000

const app = new App(
    [
        new PostsController()
    ],
    PORT
)

app.listen()