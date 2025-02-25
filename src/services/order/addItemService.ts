import prismaClient from "../../prisma";

interface ItemRequest{
    order_id:string,
    product_id: string,
    amount:number

}

class AddItemService{

    async execute ({order_id,product_id, amount}:ItemRequest){
        const items = await prismaClient.item.create({
            data:{
           order_id:order_id,
           product_id:product_id,
           amoun:amount
            }
        })
        return items;

    }
}

export {AddItemService}