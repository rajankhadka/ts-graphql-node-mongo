import { CategoryModel } from '../model/index.model';

class CategoryService {
  constructor() {}

  async getCategories() {
    return await CategoryModel.find({}, { userId: 0 });
  }

  async getCategory(params: any) {
    return await CategoryModel.findById(params.id);
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
}

const categoryService = new CategoryService();
export default categoryService;