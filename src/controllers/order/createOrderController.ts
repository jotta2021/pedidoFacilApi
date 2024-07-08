import { Request,Response,NextFunction } from "express";
import { createOrderService } from "../../services/order/createOrderService";

class CreateOrderController{

async handle(req:Request,res:Response){

const {table, name} =req.body;

const createOrder = new createOrderService()
const order = await  createOrder.execute({
    name,
    table
})
return res.json(order)
}


}

export {CreateOrderController}