import mongoose, { Schema, SchemaTypes } from "mongoose";

const CommentSchema = new Schema({
  commentName: {
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
  productId: {
    type: SchemaTypes.ObjectId,
    ref: 'ProductSchema',
  }
}, {collection: "comment"});

export const CommentModel = mongoose.model("comment", CommentSchema);
