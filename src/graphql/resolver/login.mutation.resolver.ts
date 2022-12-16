import authenticationService from "../../service/authentication.service";

export const loginMutationResolver = {
    login: async (parent: any, {params}: any, ctx: any) => {
       return authenticationService.login(params.username, params.password);
    }
}