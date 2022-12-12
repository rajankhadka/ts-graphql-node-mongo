import userService from "../../../service/user-info.service";

export const userInfoMutationResolver = {
    createUser: async(parent: any, {params}: any, ctx: any) => {
        const user = await userService.createUser(params);
        return user;
    },
    updateUser: async(parent: any, {params}: any, ctx: any) => {
        console.log(params);
    }
}