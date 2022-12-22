import { CategoryModel } from '../model/index.model';
class CategoryService {
  constructor() {}

  async getCategories(params: any) {
    console.log("======== categories ==========");
    return await CategoryModel.find({userId: params.userId });
  }

  async getCategory(params: any) {
    console.log("======== get category ======");
    return await CategoryModel.findOne({_id: params.id, userId: params.userId});
  }

  async createCategory(params: any) {
    const category = await CategoryModel.create({...params});
    return {id: category.id};
  }
  async updateCategory(params: any){
    const foundCategory = await CategoryModel.findById(params.id);
    if(!foundCategory) throw new Error('category doesnot exist');
    const obj: {[key: string]: any} = {};
    for(const key in params){
        if(params[key] && key !== 'id') obj[key] = params[key];
    }

    await CategoryModel.updateOne({_id: params.id}, {$set: {...obj}});
    return {id: params.id};
  };
  async deleteCategory(params: any){
    const foundCategory = await CategoryModel.findById(params.id);
    if (!foundCategory) throw new Error("category doesnot exist");
    await CategoryModel.deleteOne({id: params.id});
    return {id: params.id};
  };

  async getCategoryByName(params: any){
    const foundCategory = await CategoryModel.findOne({categoryName: params.categoryName}, {categoryName: 1, _id: 1});
    if(!foundCategory) throw new Error('No Category Exist');
    return foundCategory;
  }
}

const categoryService = new CategoryService();
export default categoryService;