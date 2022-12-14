import { categoryMutationResolver } from "./category/category.mutation.resolver";
import { cateoryQuery } from "./category/category.query.resolver";
import { userInfoMutationResolver } from "./user-info/user-info.mutation.resolver";
import { userInfoQuery } from "./user-info/user-info.query.resolver";

export const resolvers = {
  Query: {
    ...userInfoQuery,
    ...cateoryQuery,
  },
  Mutation: {
    ...userInfoMutationResolver,
    ...categoryMutationResolver,
  },
};