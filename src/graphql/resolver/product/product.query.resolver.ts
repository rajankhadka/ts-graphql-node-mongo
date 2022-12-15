import productService from '../../../service/product.service';
const productQueryResolver = {
  getProducts: async (parent: any, args: any, ctx: any) => {
    return productService.getProducts();
  },
  getProduct: async (parent: any, {params}: any, ctx: any) => {
    return productService.getProduct(params);
  },
};

export default productQueryResolver;