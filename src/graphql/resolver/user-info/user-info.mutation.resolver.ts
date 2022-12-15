import { userInfoByIdValidationSchema, userInfoUpdateValidationSchema, userInfoValidationSchema } from "../../../validation/user-info.validation";
import userService from "../../../service/user-info.service";

export const userInfoMutationResolver = {
  createUser: async (parent: any, { params }: any, ctx: any) => {
    await userInfoValidationSchema.validateAsync(params );
    return userService.createUser(params);
  },
  updateUser: async (parent: any, { params }: any, ctx: any) => {
    await userInfoUpdateValidationSchema.validateAsync(params);
    return userService.updateUser(params);
  },
  deleteUser: async (parent: any, { params }: any, ctx: any) => {
    await userInfoByIdValidationSchema.validateAsync(params);
    return userService.deleteUser(params);
  },
};