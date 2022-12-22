import ICtx from "interface/ctx.interface";
import commentService from "../../../service/comment.service";
export const commentMutationResolver = {
  createComment: async (
    parent: any,
    { params }: any,
    { isAuthenticate, error, payload }: ICtx
  ) => {
    if (!isAuthenticate) throw new Error(error);
    return await commentService.createComment({
      ...params,
      userId: payload.sub,
    });
  },
  updateComment: async (
    parent: any,
    { params }: any,
    { isAuthenticate, error, payload }: ICtx
  ) => {
    if (!isAuthenticate) throw new Error(error);
    return await commentService.updateComment({
      ...params,
      userId: payload.sub,
    });
  },
  deleteComment: async (
    parent: any,
    { params }: any,
    { isAuthenticate, error, payload }: ICtx
  ) => {
    if (!isAuthenticate) throw new Error(error);
    return await commentService.deleteComment({
      ...params,
      userId: payload.sub,
    });
  },
};
