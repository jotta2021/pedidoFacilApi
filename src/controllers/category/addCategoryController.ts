import { Request,Response,NextFunction } from "express";
import { AddCategoryService } from "../../services/category/AddCategoryService";
class addCategoryControler{
async handle( req:Request,res:Response,next:NextFunction){

    const {name} = req.body;

const Createcategory = new AddCategoryService()
const category =await  Createcategory.execute({name})

return res.json(category);
}

}

export default addCategoryControler