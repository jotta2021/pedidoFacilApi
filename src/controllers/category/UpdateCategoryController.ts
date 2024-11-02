import { Request, Response } from "express";
import UpdateCategoryService from "../../services/category/UpdateCategoryService";

class UpdateCategoryController {
  async handle(req: Request, res: Response) {
    const { id, name } = req.body;
    try {
      const updateService = new UpdateCategoryService();
      const update = await updateService.execute({ id, name });
      res.status(200).json(update);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default UpdateCategoryController;
