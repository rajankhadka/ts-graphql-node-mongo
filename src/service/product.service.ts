import { ProductModel } from "../model/index.model";

class ProductService {
  constructor() {}

  async getProducts() {
    return await ProductModel.find({}, {userId: 0, categoryId: 0});
  }

  async getProduct(params: any) {
    return await ProductModel.findById(params.id, {userId: 0, categoryId: 0});
  }

  async createProduct(params: any) {
    const product = await ProductModel.create({...params});
    return {id: product._id};
  }

  async updateProduct(params: any){
    const foundCategory = await ProductModel.findById(params.id);
    if (!foundCategory) throw new Error("product doesnot exist");
    const obj: { [key: string]: any } = {};
    for (const key in params) {
      if (params[key] && key !== "id") obj[key] = params[key];
    }

    await ProductModel.updateOne({ _id: params.id }, { $set: { ...obj } });
    return { id: params.id };
  };

  async deleteProduct(params: any){
    const foundItem = await this.getProduct(params);
    if(!foundItem) throw new Error('product not found');
    await ProductModel.deleteOne({id: params.id});
    return {id: foundItem._id};
  };
}

const productService = new ProductService();
export default productService;