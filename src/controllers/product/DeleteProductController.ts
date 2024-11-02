import { NextFunction ,Request,Response} from "express";
import DeleteProductService from "../../services/products/DeleteProductService";

class DeleteProductController{
    async handle(req:Request, res:Response, next:NextFunction){
const id = req.query.id as string;

const deleteService = new DeleteProductService();
try{
  const Delete = await deleteService.execute({id})
res.status(200).json('Produto deletado com sucesso')  
}
catch(error){
    res.status(500).json(error)
}

    }
}

export default DeleteProductController;