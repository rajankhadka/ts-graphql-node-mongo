import { CommentModel } from "../model/index.model";
import productService from "./product.service";
class CommentService {
  constructor() {}

  async getComments(params: any) {
    return await CommentModel.find({ userId: params.userId });
  }

  async getComment(params: any) {
    return await CommentModel.findOne({
      _id: params.id,
      userId: params.userId,
    });
  }

  async createComment(params: any) {
    const foundProduct = await productService.getProductByProductName({
      productName: params.productName,
    });
    if (!foundProduct) throw new Error("no such product");
    const comment = await CommentModel.create({
      commentName: params.commentName,
      productId: foundProduct?.id,
      userId: params.userId,
    });
    return { id: comment._id };
  }

  async updateComment(params: any) {
    if (!(await this.getComment(params)))
      throw new Error("comment doesnot exist");
    const obj: { [key: string]: any } = {};
    for (const key in params) {
      if (params[key] && !["id", "userId"].includes(key))
        obj[key] = params[key];
    }
    await CommentModel.updateOne(
      { _id: params.id, userId: params.userId },
      { $set: { ...obj } }
    );
    return { id: params.id };
  }

  async deleteComment(params: any) {
    if (!(await this.getComment(params)))
      throw new Error("comment doesnot exist");
    await CommentModel.deleteOne({ _id: params.id, userId: params.userId });
    return { id: params.id };
  }

  async getCommentByProductId(params: any) {
    const foundComment = await CommentModel.find({
      productId: params.productId,
    });
    return foundComment.length ? foundComment : [];
  }
}

const commentService = new CommentService();
export default commentService;
