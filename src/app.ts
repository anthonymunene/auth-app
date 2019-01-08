import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as mongoose from 'mongoose'
import loggerMiddleware  from './middleware/logger'
import errorHandler from './middleware/errorHandler'


class App {
    public app: express.Application
    public port: any

    constructor(controllers, port: any) {

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
        const { MONGO_DB_NAME, DB_PORT, MONGO_USER, MONGO_PASSWORD, MONGO_PATH } = process.env
        console.log(`database://database/:${MONGO_DB_NAME}`)
        const mongodbConfig = {
            user: MONGO_USER,
            pass: MONGO_PASSWORD
        }
        mongoose.connect(`mongodb://${MONGO_PATH}`);
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App is listening on port: ${this.port}`)
        })
    }
}
export default App