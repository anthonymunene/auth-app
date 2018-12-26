import 'dotenv/config'
import App from './app'
import PostController from './post/post.Controller'
import loggerMiddleware  from './middleware/logger'
import errorHandler from './middleware/errorHandler'

const PORT = process.env.PORT || 5000

const app = new App(
    [
        new PostController()
    ],
    PORT
)

app.listen()