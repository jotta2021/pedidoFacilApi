import prismaClient from "../../prisma";

interface ProductRequest{
    name:string;
    price:string;
    description:string;
    banner:string;
    category_id:string;
    id:string;

}


class UpdateProductService{
async execute({name,price,description,banner,category_id, id}:ProductRequest){
const product = await prismaClient.product.update({
    where:{
id:id
    },
    data:{
        name:name,
        price:parseFloat(price),
        description:description,
        banner:banner,
        category_id:category_id
    }
})
return product;



}
}

export{UpdateProductService}