import authenticationService from "../../service/authentication.service";

export const loginQueryResolver = {
    login: async (parent: any, {params}: any, ctx: any, info: any) => {
        return authenticationService.login(params.username, params.password);
    }
}