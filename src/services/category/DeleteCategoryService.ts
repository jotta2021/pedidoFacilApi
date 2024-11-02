import prismaClient from "../../prisma";

interface Props {
  id: string;
}

class DeleteCategoryService {
  async execute({ id }) {
    const deleteCategory = await prismaClient.category.delete({
      where: {
        id: id,
      },
    });
    return deleteCategory;
  }
}

export default DeleteCategoryService;
