import categoryService from "../../../service/category.service";

export const cateoryQuery = {
  getCategories: async (
    _: any,
    __: any,
    { isAuthenticate, error, payload }: any
  ) => {
    if(!isAuthenticate) throw new Error(error);

    return categoryService.getCategories({userId: payload.sub});
  },
  getCategory: (
    _: any,
    { params }: any,
    { isAuthenticate, error, payload }: any
  ) => {
    if(!isAuthenticate) throw new Error(error);
    return categoryService.getCategory({...params, userId: payload.sub});
  },
};