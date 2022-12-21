import userService from '../../../service/user-info.service';
import { userInfoByIdValidationSchema } from '../../../validation/user-info.validation';
export const userInfoQuery = {
    getUsers: async (parent: any, args: any, ctx: any) => {
        return userService.getUsers();
    },
    getUser: async (parent: any, _: any, {isAuthenticate, error, payload}: any) => {
        if(!isAuthenticate) throw new Error(error); 
        await userInfoByIdValidationSchema.validateAsync({id: payload.sub});
        return userService.getUser({id: payload.sub});
    }
}

