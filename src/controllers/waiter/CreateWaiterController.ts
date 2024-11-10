import { Request, Response, NextFunction } from "express";
import CreateWaiterService from "../../services/waiter/CreateWaiterService";
class CreateWaiterController {
  async handle(req: Request, res: Response, next: NextFunction) {
    const { name, email, password, status,restaurantId } = req.body;

    const createWaiterservice = new CreateWaiterService();
    try {
      const create = await createWaiterservice.execute({
        name,
        email,
        password,
        status,
        restaurantId
      });
      res.status(200).json(create);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default CreateWaiterController;
