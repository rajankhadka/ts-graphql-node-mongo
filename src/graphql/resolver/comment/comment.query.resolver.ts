import commentService from '../../../service/comment.service';
export const commentQueryResolver = {
  getComments: async (parent: any, args: any, ctx: any)=> {
    return commentService.getComments();
  },
  getComment: async (parent: any, {params}: any, ctx: any)=> {
    return commentService.getComment(params);
  },
};