export interface ICommon extends IBase {
  createdAt?: Date;
  updatedAt?: Date;
  isActive?: string;
}

export interface IBase {
  id?: string;
}