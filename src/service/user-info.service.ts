import {
  IUserInfoCreate,
  IUserInfoDelete,
  IUserInfoFetch,
  IUserInfoUpdate,
} from "../interface/user-info.interface";
import { UserInfoModel } from "../model/index.model";

class UserService {
  constructor() {}

  async getUsers() {
    const users = await UserInfoModel.find();
    return users;
  }

  async getUser(params: IUserInfoFetch) {
    const user = await UserInfoModel.findOne(
      { _id: params.id },
      { password: 0 }
    );
    
    return user;
  }

  async createUser(data: IUserInfoCreate) {
    const user = await UserInfoModel.create({ ...data });
    return { id: user._id };
  }

  async updateUser(data: IUserInfoUpdate) {
    const foundUser = await UserInfoModel.findById(data.id);
    if (!foundUser) throw new Error("user doesnot exist");
    const obj: IUserInfoUpdate = {};
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        if (data[key] && key !== "id") {
          obj[key] = data[key];
        }
      }
    }
    await UserInfoModel.updateOne({ _id: data.id }, { $set: { ...obj } });
    return { id: data.id };
  }

  async deleteUser(data: IUserInfoDelete) {
    const foundUser = await UserInfoModel.findById(data.id);
    if (!foundUser) throw new Error("user doesnot exist");
    await UserInfoModel.deleteOne({ _id: data.id });
    return { id: foundUser._id };
  }

  async getUserByUserName(username: string) {
    return await UserInfoModel.findOne(
      { username },
      { username: 1, password: 1, _id: 1 }
    );
  }
}

const userService = new UserService();
export default userService;
