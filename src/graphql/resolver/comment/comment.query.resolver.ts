import ICtx from "interface/ctx.interface";
import commentService from "../../../service/comment.service";
export const commentQueryResolver = {
  getComments: async (
    parent: any,
    args: any,
    { isAuthenticate, error, payload }: ICtx
  ) => {
    if (!isAuthenticate) throw new Error(error);
    return commentService.getComments({ userId: payload.sub });
  },
  getComment: async (
    parent: any,
    { params }: any,
    { isAuthenticate, error, payload }: ICtx
  ) => {
    if (!isAuthenticate) throw new Error(error);
    return commentService.getComment({ ...params, userId: payload.sub });
  },
};
