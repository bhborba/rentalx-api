import { IResolvers } from 'graphql-tools';

import { CategoriesRepository } from '../../modules/cars/repositories/CategoriesRepository';
import { CreateCategoryService } from '../../modules/cars/services/CreateCategoryService';
import { Category, MutationCreateCategoryArgs } from '../generated';
import { dateScalar } from '../scalars/dateScalar';

const categoriesRepository = new CategoriesRepository();

export const CategoryResolvers: IResolvers = {
    Date: dateScalar,

    Mutation: {
        async createCategory(
            _: void,
            args: MutationCreateCategoryArgs,
        ): Promise<Category> {
            const { name, description } = args;

            const createCategoryService = new CreateCategoryService(
                categoriesRepository,
            );
            const category = createCategoryService.execute({
                name,
                description,
            });

            return category;
        },
    },

    Query: {
        async listCategories(): Promise<Category[]> {
            const categories = categoriesRepository.list();

            return categories;
        },
    },
};
