import userService from '../../../service/user-info.service';
export const userInfoQuery = {
    getUsers: async (parent: any, args: any, ctx: any) => {
        return userService.getUsers();
    },
    getUser: async (parent: any, {params}: any, ctx: any) => {
        return userService.getUser(params);
    }
}