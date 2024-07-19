import { Request,Response } from "express"
import { ListProductsDefaultService } from "../../services/products/listProductsDefaultService"

class ListProductDefaultController{
async handle(req:Request,res:Response){
    const listproductsService = new ListProductsDefaultService()
    const products = await listproductsService.execute()

    return res.json(products)
}
}

export {ListProductDefaultController}