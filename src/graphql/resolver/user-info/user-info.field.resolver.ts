import productService from "../../../service/product.service";
import categoryService from "../../../service/category.service";
import commentService from "../../../service/comment.service";

export const userInfoCategoryFieldResolver = {
  UserInfo: {
    categories: (parent: any, args: any, { isAuthenticate, error }: any) => {
      if (!isAuthenticate) throw new Error(error);
      return categoryService.getCategories({ userId: parent._id });
    },
    products: (
      parent: any,
      args: any,
      { isAuthenticate, error, payload }: any
    ) => {
      if (!isAuthenticate) throw new Error(error);
      return productService.getProducts({ userId: parent._id });
    },
    comments: (
      parent: any,
      args: any,
      { isAuthenticate, error, payload }: any
    ) => {
      if (!isAuthenticate) throw new Error(error);
      return commentService.getComments({ userId: payload.sub });
    },
  },
};
