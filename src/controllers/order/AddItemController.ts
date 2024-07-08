import { Request,Response } from "express";
import { AddItemService } from "../../services/order/addItemService";
class AddItemController{


    async handle (req:Request,res:Response){

        const {product_id,order_id,amount} = req.body;

        const ItemService=  new AddItemService()
        const addItem = await ItemService.execute({
            order_id,
            product_id,
            amount
        })
        return res.json(addItem)
    }
}

export {AddItemController}
