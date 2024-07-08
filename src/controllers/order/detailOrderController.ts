import { Request,Response } from "express";
import { detailOrderService } from "../../services/order/detailsOrderService";


class DetailOrderController{
    async handle(req:Request, res:Response){

const order_id = req.query.order_id as string;

const detailOrder= new detailOrderService()
const details = await detailOrder.execute({
    order_id
})
return res.json(details)

    }
}

export {DetailOrderController}