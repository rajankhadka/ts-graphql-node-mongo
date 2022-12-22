import ICtx from "interface/ctx.interface";
import productService from "../../../service/product.service";
import userService from "../../../service/user-info.service";

export const categoryFieldResolver = {
  Category: {
    userInfo: (parent: any, args: any, { isAuthenticate, error }: ICtx) => {
      if (!isAuthenticate) throw new Error(error);
      return userService.getUser({ id: parent.userId });
    },
    products: (
      parent: any,
      args: any,
      { isAuthenticate, error }: ICtx
    ) => {
      if (!isAuthenticate) throw new Error(error);
      return productService.getProductByUserIdAndCategoryId({
        categoryId: parent._id,
        userId: parent.userId,
      });
    },
  },
};