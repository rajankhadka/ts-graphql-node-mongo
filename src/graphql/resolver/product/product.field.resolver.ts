import categoryService from "../../../service/category.service";
import userService from "../../../service/user-info.service";

export const productFieldResolver = {
  Product: {
    userInfo: (
      parent: any,
      args: any,
      { isAuthenticate, error, payload }: any
    ) => {
      if (!isAuthenticate) throw new Error(error);
      return userService.getUser({ id: parent.userId });
    },
    category: (
      parent: any,
      args: any,
      { isAuthenticate, error, payload }: any
    ) => {
        if (!isAuthenticate) throw new Error(error);
        return categoryService.getCategory({id: parent.categoryId, userId: parent.userId});
    },
  },
};