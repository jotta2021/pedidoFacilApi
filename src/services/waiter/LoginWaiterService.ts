import prismaClient from "../../prisma";
import {compare} from 'bcryptjs'
interface Props {
  email: string;
  password: string;
  user_id: string;
}

class LoginWaiterService {
  async execute({ email, password, user_id }: Props) {
    const emailExists = await prismaClient.waiter.findFirst({
      where: {
        restauranteId: user_id,
        email: email,
      },
    });
    if(!emailExists){
        throw new Error("O garçom não existe")
    }

    const comparePassword = await compare(password,emailExists.password)
    if(!comparePassword){
        throw new Error("Senha incorreta")
    }
 
    
  }
}
