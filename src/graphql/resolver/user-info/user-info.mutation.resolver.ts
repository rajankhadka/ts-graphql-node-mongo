import userService from "../../../service/user-info.service";

export const userInfoMutationResolver = {
    createUser: async(parent: any, {params}: any, ctx: any) => {
        return  userService.createUser(params);
    },
    updateUser: async(parent: any, {params}: any, ctx: any) => {
        return userService.updateUser(params);
    },
    deleteUser: async(parent: any, {params}: any, ctx: any) => {
        return userService.deleteUser(params);
    }
}