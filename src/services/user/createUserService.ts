import prismaClient from "../../prisma"
//biblioteca pra criptografar senha do usuario
import { hash } from "bcryptjs"

interface UserRequest{
    name:string,
    email:string,
    password:string
}

class CreateUserService{
    async execute({name,email,password}:UserRequest){
      

        //verifica se foi enviado um email
        if(!email ){
            throw new Error('Email incorrect')
        }
      
//verificar se o email enviado já existe no banco de dados
const userExist = await prismaClient.user.findFirst({
    where:{
        email: email
    }
})

const paswordHash = await hash(password,8)

if(userExist){
    throw new Error('User already exists')
}

const user = await prismaClient.user.create({
    data:{
        name:name,
        email:email,
        password:paswordHash,
    },
    select:{
        name:true,
        email:true,
        id:true
    }
})


        return user;
    } 
 
}

export {CreateUserService}