import prismaClient from "../../prisma"

interface Props{
    id:string,
    name: string
}

class UpdateCategoryService{
    async execute({id,name}:Props){

        const updateCategory =await prismaClient.category.update({
            where:{
                id:id
            },
            data:{
                name:name
            }
        })

        return updateCategory;

    }
}

export default UpdateCategoryService;