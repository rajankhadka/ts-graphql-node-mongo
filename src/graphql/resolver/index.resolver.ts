import { userInfoMutationResolver } from "./user-info/user-info.mutation.resolver";
import { userInfoQuery } from "./user-info/user-info.query.resolver";

export const resolvers = {
  Query: {
    ...userInfoQuery,
  },
  Mutation: {
    ...userInfoMutationResolver,
  },
};