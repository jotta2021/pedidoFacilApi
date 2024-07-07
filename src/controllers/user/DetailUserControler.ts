import { Request,Response } from "express";
import { DetailUserService } from "../../services/user/DetailUserService";

class DetailUserControler{
    async handle(req:Request,res:Response){


        const user_id=req.user_id;
        console.log('id do usuario',user_id)
        const Detail = new DetailUserService()
        const user = await Detail.execute(user_id)
        return res.json(user)


    }
}

export{DetailUserControler}