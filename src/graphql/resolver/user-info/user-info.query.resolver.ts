import userService from '../../../service/user-info.service';
import { userInfoByIdValidationSchema } from '../../../validation/user-info.validation';
export const userInfoQuery = {
    getUsers: async (parent: any, args: any, ctx: any) => {
        return userService.getUsers();
    },
    getUser: async (parent: any, {params}: any, ctx: any) => {
        await userInfoByIdValidationSchema.validateAsync(params);
        return userService.getUser(params);
    }
}