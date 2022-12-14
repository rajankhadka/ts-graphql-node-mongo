import categoryService from "../../../service/category.service";

export const cateoryQuery = {
  getCategories: async(parent: any, args: any, ctx: any) => {
    return categoryService.getCategories();
  },
  getCategory: (parent: any, {params}: any, ctx: any) => {
    return categoryService.getCategory(params);
  }
};