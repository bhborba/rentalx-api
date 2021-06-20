import { IResolvers } from 'graphql-tools';

import { createCategoryUseCase } from '../../modules/cars/useCases/createCategory';
import { listCategoriesUseCase } from '../../modules/cars/useCases/listCategories';
import { Category, MutationCreateCategoryArgs } from '../generated';
import { dateScalar } from '../scalars/dateScalar';

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
            const categories = listCategoriesUseCase.execute();

            return categories;
        },
    },
};
