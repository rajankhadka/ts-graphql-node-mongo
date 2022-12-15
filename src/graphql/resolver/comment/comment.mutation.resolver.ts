import commentService from "../../../service/comment.service";
export const commentMutationResolver = {
  createComment: async (parent: any, {params}: any, ctx: any) => {
    return await commentService.createComment(params);
  },
  updateComment: async (parent: any, {params}: any, ctx: any) => {
    return await commentService.updateComment(params);
  },
  deleteComment: async (parent: any, {params}: any, ctx: any) => {
    return await commentService.deleteComment(params);
  },
};
