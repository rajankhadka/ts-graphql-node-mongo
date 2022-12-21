import userService from "../../../service/user-info.service";

export const categoryFieldResolver = {
    Category: {
        userInfo: (parent: any, args: any, {isAuthenticate, error}: any) => {
            if(!isAuthenticate) throw new Error(error);
            return userService.getUser({id: parent.userId});
        }
    }
}