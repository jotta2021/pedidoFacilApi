import prismaClient from "../../prisma";

interface OrderRequest{
    order_id: string;
}

class deleteOrderService {
    async execute ({order_id}: OrderRequest){
const order = await prismaClient.order.delete({
    where: {
        id:order_id
    }
})
return('Pedido deletado')

    }
}

export {deleteOrderService}