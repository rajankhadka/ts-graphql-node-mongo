import { categoryMutationResolver } from "./category/category.mutation.resolver";
import { cateoryQuery } from "./category/category.query.resolver";
import { commentMutationResolver } from "./comment/comment.mutation.resolver";
import { commentQueryResolver } from "./comment/comment.query.resolver";
import { loginQueryResolver } from "./login.query.resolver";
import productMutationResolver from "./product/product.mutation.resolver";
import productQueryResolver from "./product/product.query.resolver";
import { userInfoMutationResolver } from "./user-info/user-info.mutation.resolver";
import { userInfoQuery } from "./user-info/user-info.query.resolver";

export const resolvers = {
  Query: {
    ...userInfoQuery,
    ...cateoryQuery,
    ...productQueryResolver,
    ...commentQueryResolver,
    ...loginQueryResolver,
  },
  Mutation: {
    ...userInfoMutationResolver,
    ...categoryMutationResolver,
    ...productMutationResolver,
    ...commentMutationResolver,
  },
};