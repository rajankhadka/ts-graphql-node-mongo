import categoryService from "../../../service/category.service";

export const categoryMutationResolver = {
  createCategory: async (
    parent: any,
    { params }: any,
    { isAuthenticate, error, payload }: any
  ) => {
    if (!isAuthenticate) throw new Error(error);
    return categoryService.createCategory({ ...params, userId: payload.sub });
  },
  updateCategory: async (
    parent: any,
    { params }: any,
    { isAuthenticate, error, payload }: any
  ) => {
    if (!isAuthenticate) throw new Error(error);
    return categoryService.updateCategory(params);
  },
  deleteCategory: async (
    parent: any,
    { params }: any,
    { isAuthenticate, error, payload }: any
  ) => {
    if (!isAuthenticate) throw new Error(error);
    return categoryService.deleteCategory(params);
  },
};