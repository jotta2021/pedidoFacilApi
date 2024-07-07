import { Request,Response,NextFunction } from "express";
import { AuthUserService } from "../../services/user/AuthUserService";

class AuthUserControler{
    
    async handle(req:Request,res:Response){
        const {email,password}= req.body;
        const service = new  AuthUserService();
        const auth = await service.execute({
            email,password
        })
return res.json(auth);

    }
}

export {AuthUserControler}