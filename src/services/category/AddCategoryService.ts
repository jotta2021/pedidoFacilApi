import prismaClient from "../../prisma";

interface CategoryRequest{
    name:string;
}

class AddCategoryService{
    async execute({name}:CategoryRequest){
       


        if(name===''){
            throw new Error('Name invalid')
        } 
        const category = await prismaClient.category.create({
            data:{
                name:name
            },
            select:{
                name:true,
                id:true
            }
        })
        return category;
    }
}

export {AddCategoryService}