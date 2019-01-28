import * as bycrypt from 'bcrypt'
import * as express from 'express'
import userModel from 'user/users.model';
import Controller from 'interfaces/controller.interface'

class AuthenticationController implements Controller {
    public path = '/auth'
    public  router = express.Router()
    private user  = userModel

    constructor() {
        this.initializeRoutes()
    }

    private initializeRoutes {
        this.router.post(`${this.path}/register`, validation)
        this.router.post(`${this.path}/login`)
    }
}