import { userInfoByIdValidationSchema, userInfoUpdateValidationSchema, userInfoValidationSchema } from "../../../validation/user-info.validation";
import userService from "../../../service/user-info.service";

export const userInfoMutationResolver = {
  createUser: async (parent: any, { params }: any, ctx: any) => {
    await userInfoValidationSchema.validateAsync(params);
    return userService.createUser(params);
  },
  updateUser: async (
    parent: any,
    { params }: any,
    { isAuthenticate, error, payload }: any
  ) => {
    if (!isAuthenticate) throw new Error(error);
   await userInfoUpdateValidationSchema.validateAsync({
     ...params,
     id: payload.sub,
   });
   return userService.updateUser({ ...params, id: payload.sub });
  },
  deleteUser: async (
    parent: any,
    _: any,
    { isAuthenticate, error, payload }: any
  ) => {
    if (!isAuthenticate) throw new Error(error);
    await userInfoByIdValidationSchema.validateAsync({ id: payload.sub });
    return userService.deleteUser({ id: payload.sub });
  }
};