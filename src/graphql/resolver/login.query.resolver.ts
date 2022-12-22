import ICtx from "interface/ctx.interface";
import authenticationService from "../../service/authentication.service";

export const loginQueryResolver = {
    login: async (_: any, {params}: any, __: ICtx) => {
        return authenticationService.login(params.username, params.password);
    }
}