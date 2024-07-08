import { Request,Response } from "express";
import { ListOrderService } from "../../services/order/listOrdersService";

class ListOrderController{
    async handle(req:Request,res:Response){
const orderService = new ListOrderService()
const orders = await orderService.execute()


return res.json(orders)
    }
}

export {ListOrderController}