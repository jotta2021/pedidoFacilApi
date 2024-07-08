import { Request,Response } from "express";
import { RemoveItemService } from "../../services/order/removeItemService";


class RemoveItemController{
    async handle(req:Request,res:Response){
        const item_id = req.query.item_id as string;

        const removeService = new RemoveItemService()
const remove  = await   removeService.execute({
    item_id
})

return res.json(remove)
    }
}

export {RemoveItemController}