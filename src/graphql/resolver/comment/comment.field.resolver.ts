import ICtx from "interface/ctx.interface";
import productService from "../../../service/product.service";
import userService from "../../../service/user-info.service";

export const commentFieldResolver = {
  Comment: {
    product: (
      parent: any,
      args: any,
      { isAuthenticate, error, payload }: ICtx
    ) => {
      if (!isAuthenticate) throw new Error(error);
      return productService.getProductById({ productId: parent.productId });
    },
    userInfo: (
      parent: any,
      args: any,
      { isAuthenticate, error, payload }: ICtx
    ) => {
      if (!isAuthenticate) throw new Error(error);
      return userService.getUser({ id: parent.userId });
    },
  },
};
