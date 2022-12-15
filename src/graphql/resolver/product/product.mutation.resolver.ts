import productService from '../../../service/product.service';
const productMutationResolver = {
  createProduct: async (parent: any, {params}: any, ctx: any) => {
    return productService.createProduct(params);
  },
  updateProduct: async (parent: any, {params}: any, ctx: any) => {
    return productService.updateProduct(params);
  },
  deleteProduct: async (parent: any, {params}: any, ctx: any) => {
    return productService.deleteProduct(params);
  },
};

export default productMutationResolver;