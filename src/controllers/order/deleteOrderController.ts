import {Request,Response} from 'express'
import { deleteOrderService } from '../../services/order/deleteOrderService';

class deleteOrderController{
async handle(req:Request,res:Response){
    const order_id= req.query.order_id as string;


    const deleteOrder = new  deleteOrderService()
    const delette = await deleteOrder.execute({
        order_id
    })
    return res.json(delette)
}
}

export {deleteOrderController}