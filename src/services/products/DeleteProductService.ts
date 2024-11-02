import prismaClient from "../../prisma";

interface Props{
    id: string
}

class DeleteProductService{
async execute({id}: Props){
    const deleteProduct = await prismaClient.product.delete({
        where:{
            id:id
        }
     
    })
    return deleteProduct;
}
}

export default DeleteProductService;