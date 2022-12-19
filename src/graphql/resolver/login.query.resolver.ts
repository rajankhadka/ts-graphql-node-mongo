import authenticationService from "../../service/authentication.service";

export const loginQueryResolver = {
    login: async (parent: any, {params}: any, ctx: any, info: any) => {
        console.log("[INFO] ===> ", info.fieldName);
        console.log(ctx._req());
       return authenticationService.login(params.username, params.password);
    }
}