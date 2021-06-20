import { IResolvers } from 'graphql-tools';

import { CategoriesRepository } from '../../modules/cars/repositories/CategoriesRepository';
import { createCategoryUseCase } from '../../modules/cars/useCases/createCategory';
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

            const category = createCategoryUseCase.execute({
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
