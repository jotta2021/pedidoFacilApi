import prismaClient from "../../prisma";
import {hash} from 'bcryptjs'
interface Props {
  name: string;
  password: string;
  email: string;
  status: Boolean;
  restaurantId: string;
}

class CreateWaiterService {
  async execute({ name, password, status, email, restaurantId }: Props) {
    const paswordHash = await hash(password,8)
    const addWaiter = await prismaClient.waiter.create({
      data: {
        name: name,
        email: email,
        password: paswordHash,
        status: Boolean(status),
        restauranteId:restaurantId
      },
    });
    return addWaiter;
  }


}

export default CreateWaiterService;
