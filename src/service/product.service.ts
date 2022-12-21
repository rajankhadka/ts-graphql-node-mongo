import { ProductModel } from "../model/index.model";
import categoryService from "./category.service";

class ProductService {
  constructor() {}

  async getProducts(params: any) {
    return await ProductModel.find({userId: params.userId});
  }

  async getProduct(params: any) {
    return await ProductModel.findOne({_id: params.id, userId: params.userId});
  }

  async createProduct(params: any) {
    const foundCategory = await categoryService.getCategoryByName({categoryName: params.categoryName});
    const product = await ProductModel.create({ productName: params.productName, categoryId: foundCategory._id, userId: params.userId });
    return {id: product._id};
  }

  async updateProduct(params: any){
    const foundCategory = await ProductModel.findOne({_id:params.id, userId: params.userId});
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
    await ProductModel.deleteOne({_id: params.id, userId: params.userId});
    return {id: foundItem._id};
  };

  async getProductByUserIdAndCategoryId(params: any){
    const foundItem = await ProductModel.find({userId: params.userId, categoryId: params.categoryId});
    return foundItem.length ? foundItem : [];
  }
}

const productService = new ProductService();
export default productService;