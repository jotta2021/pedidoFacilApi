import { CreateProductService } from "../../services/products/createProductService";
import { Response,Request,NextFunction, json } from "express";

class CreateProductController{
    async handle(req:Request,res:Response,next:NextFunction){

        const {name,price,description,category_id} = req.body;
        console.log(name,price,description,category_id)
   

        if(!req.file){
            throw new Error('Error upload file')
        } else{
            const {originalname,fileName} = req.file;
            console.log(originalname,fileName)
            const service = new CreateProductService;
const serviceProduct = await service.execute({name,price,description,banner:'',category_id})


return res.json(serviceProduct)
        }


    }
}

export{CreateProductController}