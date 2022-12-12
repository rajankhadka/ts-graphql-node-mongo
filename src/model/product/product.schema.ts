import mongoose, { Schema, SchemaTypes } from "mongoose";

const ProductSchema = new Schema({
  productName: {
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
  categoryId: {
    type: SchemaTypes.ObjectId,
    ref: "CategorySchema",
  },
}, {collection: "product"});

export const ProductModel = mongoose.model('product', ProductSchema);
