import { IBase, ICommon } from "./common.interface";

export interface IUserInfoCreate extends ICommon {
    username: string,
    password: string,
    email: string,
}

export interface IUserInfoUpdate extends IBase{
    username?: string,
    password?: string,
    email?: string,
    [key: string]: any,
}

export interface IUserInfoDelete extends IBase{};
export interface IUserInfoFetch extends IBase{};

