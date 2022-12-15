import {CommentModel} from '../model/index.model';
class CommentService {
  constructor() {}

  async getComments(){
    return await CommentModel.find({},{userId: 0,productId: 0});
  };

  async getComment(params: any){
    return await CommentModel.findById(params.id, {userId: 0, productId: 0});
  };

  async createComment(params: any){
    const comment = await CommentModel.create({...params});
    return {id: comment._id};
  };

  async updateComment(params: any){
    if (!(await this.getComment(params)))
        throw new Error("comment doesnot exist");
    const obj: { [key: string]: any } = {};
    for (const key in params) {
      if (params[key] && key !== "id") obj[key] = params[key];
    }
    await CommentModel.updateOne({ _id: params.id }, { $set: { ...obj } });
    return { id: params.id };
  };

  async deleteComment(params: any){
    if(!await this.getComment(params)) throw new Error('comment doesnot exist');
    await CommentModel.deleteOne({id: params.id});
    return {id: params.id};
  };
}

const commentService = new CommentService();
export default commentService;