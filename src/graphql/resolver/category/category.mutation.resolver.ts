import categoryService from "../../../service/category.service";

export const categoryMutationResolver = {
  createCategory: async(parent: any, {params}: any, ctx: any) => {
    return categoryService.createCategory(params);
  },
  updateCategory: async(parent: any, {params}: any, ctx: any) => {
    return categoryService.updateCategory(params);
  },
  deleteCategory: async(parent: any, {params}: any, ctx: any) => {
    return categoryService.deleteCategory(params);
  },
};