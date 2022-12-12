import { UserInfoModel } from '../model/index.model';

class UserService{
    constructor(){}

    async getUsers(){
        try {
            const users = await UserInfoModel.find();
            return users;
        } catch (error) {
            throw error;
        }
    }

    async getUser(id: string){
        try {
            const user = await UserInfoModel.findById(id);
            return user;
        } catch (error) {
            throw error;
        }
    }

    async createUser(data: any){
        try {
            const user = await UserInfoModel.create({...data});
            return {id: user._id};
        } catch (error) {
            throw error;
        }
    }
}

const userService = new UserService();
export default userService;