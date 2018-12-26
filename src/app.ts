import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as mongoose from 'mongoose'
import loggerMiddleware  from './middleware/logger'
import errorHandler from './middleware/errorHandler'


class App {
    public app: express.Application
    public port: any

    constructor(controllers, port: any) {

        console.log(process.env)
        this.app = express()
        this.port = port
        this.connectToDataBase()
        this.initializeMiddleWares()
        this.initializeControllers(controllers)
    }

    private initializeMiddleWares() {
        this.app.use(bodyParser.json())
        this.app.use(loggerMiddleware)
        this.app.use(errorHandler)
    }

    private initializeControllers(controllers) {
        controllers.forEach(controller => {
            this.app.use('/', controller.router)
            
        });
    }

    private connectToDataBase() {
        const { MONGO_USER, MONGO_PASSWORD, MONGO_PATH } = process.env
        console.log(`mongodb://${MONGO_USER}:${MONGO_PASSWORD}${MONGO_PATH}`)
        mongoose.connect(`mongodb://${MONGO_USER}:${MONGO_PASSWORD}${MONGO_PATH}`);
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App is listening on port: ${this.port}`)
        })
    }
}
export default App