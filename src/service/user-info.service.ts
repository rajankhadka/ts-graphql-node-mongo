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

    async getUser(params: any){
        try {
            const user = await UserInfoModel.findById(params.id);
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

    async updateUser(data: any){
        try {
            const foundUser = await UserInfoModel.findById(data.id)
            if(!foundUser) throw new Error("user doesnot exist");
            const obj: {[key: string]: any} = {};
            for (const key in data) {
                if (Object.prototype.hasOwnProperty.call(data, key)) {
                    if(data[key] && key !== 'id' ){
                        obj[key] = data[key];
                    }
                }
            }
            // const user = await UserInfoModel.create({...foundUser, ...obj});
            await UserInfoModel.updateOne({_id: data.id}, {$set: {...obj}});
            return {id: data.id};
        } catch (error) {
            throw error;
        }
    }

    async deleteUser(data: any){
        try {
            const foundUser = await UserInfoModel.findById(data.id);
            if (!foundUser) throw new Error("user doesnot exist");
            await UserInfoModel.deleteOne({_id: data.id});
            return {id: foundUser._id};
        } catch (error) {
            throw error;
        }
    }
}

const userService = new UserService();
export default userService;