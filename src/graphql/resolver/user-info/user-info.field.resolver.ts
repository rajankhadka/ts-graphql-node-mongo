import categoryService from "../../../service/category.service";

export const userInfoCategoryFieldResolver = {
    UserInfo: {
        categories: (parent: any, args: any, {isAuthenticate, error}: any) => {
            if(!isAuthenticate) throw new Error(error);
            return categoryService.getCategories({userId: parent._id});
        }
    }
}