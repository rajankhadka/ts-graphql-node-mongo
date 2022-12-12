import mongoose, {Schema, SchemaTypes} from "mongoose";

const UserInfoSchema= new Schema({
  username: {
    type: SchemaTypes.String,
    required: true,
    unique: true,
    maxLength: 15
  },
  email: {
    type: SchemaTypes.String,
    require: true,
    unique: true,
    maxLength: 50,
  },
  password: {
    type: SchemaTypes.String,
    require: true,
    maxLength: 300
  },
  isActive: {
    type: SchemaTypes.Boolean,
    default: true,
  },
  createdAt: {
    type: SchemaTypes.Date,
    default: Date.now,
  },
  updatedAt: {
    type: SchemaTypes.Date,
    default: Date.now
  }
}, {collection: 'user_info'});
const UserInfoModel = mongoose.model("user_info", UserInfoSchema);

export {UserInfoModel};