import ICtx from 'interface/ctx.interface';
import userService from '../../../service/user-info.service';
import { userInfoByIdValidationSchema } from '../../../validation/user-info.validation';
export const userInfoQuery = {
    getUsers: async (_: any, __: any, ___: any) => {
        return userService.getUsers();
    },
    getUser: async (_: any, __: any, {isAuthenticate, error, payload}: ICtx) => {
        if(!isAuthenticate) throw new Error(error); 
        console.log("====== user =====");
        await userInfoByIdValidationSchema.validateAsync({id: payload.sub});
        return userService.getUser({id: payload.sub});
    }
}