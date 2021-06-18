import { IResolvers } from 'graphql-tools';

import { CategoriesRepository } from '../../repositories/CategoriesRepository';
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

            const category = categoriesRepository.create({ name, description });

            return category;
        },
    },
};
