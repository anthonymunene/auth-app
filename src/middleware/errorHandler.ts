import * as express from 'express'

const errorHandler: express.ErrorRequestHandler = (err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(`Error: ${err}`)
    next()
}

export default errorHandler