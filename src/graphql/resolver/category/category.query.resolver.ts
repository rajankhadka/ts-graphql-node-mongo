import categoryService from "../../../service/category.service";

export const cateoryQuery = {
  getCategories: async (
    parent: any,
    args: any,
    { isAuthenticate, error, payload }: any
  ) => {
    if(!isAuthenticate) throw new Error(error);

    return categoryService.getCategories({userId: payload.sub});
  },
  getCategory: (
    parent: any,
    { params }: any,
    { isAuthenticate, error, payload }: any
  ) => {
    if(!isAuthenticate) throw new Error(error);
    return categoryService.getCategory({...params, userId: payload.sub});
  },
};