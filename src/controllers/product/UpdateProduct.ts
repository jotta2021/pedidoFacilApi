import { CreateProductService } from "../../services/products/createProductService";
import { Response,Request,NextFunction, json } from "express";
import { UpdateProductService } from "../../services/products/UpdateProducService";

class UpdateProductController{
    async handle(req:Request,res:Response,next:NextFunction){

        const {name,price,description,category_id, banner} = req.body;
        const id = req.query.id as string;

     
   const createProductServide = new UpdateProductService()

   try{
    
      // Se o usuário enviou um arquivo novo, usa `filename`; caso contrário, mantém `banner`.
      const bannerFile = req.file ? req.file.filename : banner;
      const product = await createProductServide.execute({
    name,
    price,
    description,
    category_id,
    banner: bannerFile,
    id
   })
   return res.json(product)
   
   }
   
 catch(error){
    console.log(error)
    res.status(500).json(error)
 }

   
     


    }
}

export{UpdateProductController}