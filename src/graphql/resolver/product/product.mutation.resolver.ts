import ICtx from 'interface/ctx.interface';
import productService from '../../../service/product.service';
const productMutationResolver = {
  createProduct: async (
    parent: any,
    { params }: any,
    { isAuthenticate, error, payload }: ICtx
  ) => {
    if (!isAuthenticate) throw new Error(error);
    return productService.createProduct({ ...params, userId: payload.sub });
  },
  updateProduct: async (
    parent: any,
    { params }: any,
    { isAuthenticate, error, payload }: ICtx
  ) => {
    if (!isAuthenticate) throw new Error(error);
    return productService.updateProduct({...params, userId: payload.sub});
  },
  deleteProduct: async (
    parent: any,
    { params }: any,
    { isAuthenticate, error, payload }: ICtx
  ) => {
    if (!isAuthenticate) throw new Error(error);
    return productService.deleteProduct({...params, userId: payload.sub});
  },
};

export default productMutationResolver;