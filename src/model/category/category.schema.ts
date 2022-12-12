import mongoose, { Schema, SchemaTypes } from "mongoose";

const CategorySchema = new Schema({
  categoryName: {
    type: SchemaTypes.String,
    required: true,
    unique: true,
    maxLength: 15,
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
  userId: {
    type: SchemaTypes.ObjectId,
    ref: "UserInfoSchema",
  },
}, {collection: 'category'});

export const CategoryModel = mongoose.model('category', CategorySchema);
