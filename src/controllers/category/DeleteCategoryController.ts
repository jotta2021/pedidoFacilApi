import { Request, Response } from "express";
import DeleteCategoryService from "../../services/category/DeleteCategoryService";

class DeleteCategoryController {
  async handle(req: Request, res: Response) {
    const id = req.query.id;

    try {
      const deleteCategoryService = new DeleteCategoryService();

      const deleteCategory = await deleteCategoryService.execute({ id });
      res.status(200).json("Categoria deletada");
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default DeleteCategoryController;
