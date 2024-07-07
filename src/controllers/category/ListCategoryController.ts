import { ListCategoryService } from "../../services/category/ListCategoryService";
import { Request,Response,NextFunction } from "express";
class ListCategoryController{

    async handle(req:Request,res:Response,next:NextFunction){

        const service = new ListCategoryService()
        const listCategory= await service.execute()
        return res.json(listCategory);

    }


}
export {ListCategoryController}