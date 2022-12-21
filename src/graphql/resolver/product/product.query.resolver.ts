import productService from '../../../service/product.service';
const productQueryResolver = {
  getProducts: async (parent: any, args: any, { isAuthenticate, error, payload }: any) => {
    if(!isAuthenticate) throw new Error(error)
    return productService.getProducts({userId: payload.sub});
  },
  getProduct: async (parent: any, {params}: any, { isAuthenticate, error, payload }: any) => {
    if (!isAuthenticate) throw new Error(error);
    return productService.getProduct({...params, userId: payload.sub});
  },
};

export default productQueryResolver;