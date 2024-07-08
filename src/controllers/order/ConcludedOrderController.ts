import { Request, Response } from "express";
import { ConcludedOrderService } from "../../services/order/ConcludedOrderService";

class ConcludedOrderController{
    async handle(req:Request, res:Response){
        
        const order_id = req.query.order_id as string;
        const ConcludedService = new ConcludedOrderService()
        const conclued = await ConcludedService.execute({
            order_id
        })
        return res.json(conclued)

    }
}

export {ConcludedOrderController}