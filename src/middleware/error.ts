import { Request, Response, ErrorRequestHandler,  NextFunction} from 'express'
import HttpException from 'exceptions/HttpException'

const errorMiddleWare = (error: HttpException, request: Request, response: Response, next: NextFunction) => {

    const status = error.status
    const message = error.message || 'Something went wrong'

    response
    .status(status)
    .send({
        status,
        message
    })
}

export default errorMiddleWare