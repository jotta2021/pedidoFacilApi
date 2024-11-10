import { Request,Response,NextFunction } from 'express';


class LoginWaiterController{
    async handle(req:Request, res:Response, next:NextFunction){
        const {email,password,user_id} =req.body;

    }
}

export default LoginWaiterController;