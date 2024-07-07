import { CreateProductService } from "../../services/products/createProductService";
import { Response,Request,NextFunction, json } from "express";

class CreateProductController{
    async handle(req:Request,res:Response,next:NextFunction){

        const {name,price,description,category_id} = req.body;

     
   const createProductServide = new CreateProductService()
   if(!req.file){
    throw new Error('error upload file')
   }else{
    const {originalname,filename:banner} = req.file;
      const product = await createProductServide.execute({
    name,
    price,
    description,
    category_id,
    banner
   })
   return res.json(product)
   }
 

   
     


    }
}

export{CreateProductController}