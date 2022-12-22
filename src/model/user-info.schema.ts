import mongoose, { Schema, SchemaTypes } from "mongoose";
import passwordUtils from "../utils/hashing-password";

const UserInfoSchema = new Schema(
  {
    username: {
      type: SchemaTypes.String,
      required: true,
      unique: true,
      maxLength: 15,
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
      maxLength: 300,
      validate: {
        validator: function (value: any) {
          return /(?=^.{8,16}$)(?=.*\d+)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z]+)(?=.*[a-z]+).*$/.test(
            value
          );
        },
        message: () =>
          "1 upper case, 1 lower case, 1 special character, 1 digit",
      },
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
      default: Date.now,
    },
  },
  { collection: "user_info" }
);


//pre middleware
UserInfoSchema.pre('save', function(next){
  if(this.isModified('password') && this?.password){
    this.password = passwordUtils.hashedPassword(this.password);
  }
  return next();
});

UserInfoSchema.set('toJSON', {
  transform: function(doc, obj){
    delete obj.password;
    return obj;
  }
})



const UserInfoModel = mongoose.model("user_info", UserInfoSchema);

export { UserInfoModel };
