import prismaClient from "../../prisma";



class ListProductsDefaultService{
    async execute(){
const products  = await prismaClient.product.findMany({
select:{
    id:true,
        price:true,
    name:true,
    banner:true,
    description:true,
    category:true
}
})
return products;

    }
}

export {ListProductsDefaultService}